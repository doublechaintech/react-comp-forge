


Date.prototype.toJSON=function(){ return this.getTime() }

//import dynaApp from './kernel'
//import dynaApp from '../../service/kernel'


export const dynaApp=()=>{
  return window.dynaApplication;
}

export const currentScenario=(currentScenarioMeta)=>{

  if(currentScenarioMeta){
      window.currentScenarioMeta=currentScenarioMeta;
  }

  return window.currentScenarioMeta;
}



export const scenarioMeta=(currentScenarioMeta)=>{

  if(currentScenarioMeta){
      window.currentScenarioMeta=currentScenarioMeta;
  }

  return window.currentScenarioMeta;
}

export const switchScenario=(scenarioNameOrObject)=>{

  if(typeof(scenarioNameOrObject)==="string"){
    const scenario=dynaApp().scenarios.find(item=>item.name===scenarioNameOrObject);
    //[scenarioName]
    if(!scenario){
      alert("未能找到对应的场景: '"+scenarioNameOrObject+"'");
      return
    }
    console.log("found scenario with meta", scenarioNameOrObject,"data",scenario.scenarioMeta)
    window.currentScenarioMeta=scenario.scenarioMeta;
    window.setScenarioMeta(scenario.scenarioMeta);
    return;
  }

  window.currentScenarioMeta=scenarioNameOrObject.scenarioMeta;

}

export const viewByName=(viewName)=>{

  const view = currentScenario().viewList.find(view=>view.viewkey===viewName);
  return view;

}

export const viewDataOf=(viewName,data)=>{
  const view = viewByName(viewName);
  if(!view){
    console.error("failed to get view by name: ", viewName)
  }
  if(data){
    if(data.__replace){
      view.data=data
      return;
    }
    //default as merge
    const finalData={...view.data,...data}
    view.data=finalData

  }
  return view;

}




export const isOverlayView=(viewObject)=>{

  if(!viewObject){
    return false;
  }
  if(!viewObject.viewtype){
    return false;
  }

  if(viewObject.viewtype==="overlay"){
    return true;
  }
  return true;


}


export const switchToView=(viewNameOrObject)=>{

  return switchView(viewNameOrObject);
}
/*


export const switchView=(viewNameOrObject)=>{

  if(typeof(viewNameOrObject)==="string"){
    const view = currentScenario().viewList.find(view=>view.viewkey===viewNameOrObject);

    if(!view){
      console.error("trying to switch to view: ", viewNameOrObject,"candidate are ", currentScenario().viewList.map(v=>v.viewkey) )
      return null;
    }
    if(isOverlayView(view)){
      if(!window.switchOverlayView){
        console.error("window.switchOverlayView is not register when to call it for switching to a pop up window");
        returnl
      }
      window.switchOverlayView(view)
      return
    }
    window.switchView(view);

    return
  }

  if(isOverlayView(viewNameOrObject)){
    if(!window.switchOverlayView){
      console.error("window.switchOverlayView is not register when to call it for switching to a pop up window");
      returnl
    }

    window.switchOverlayView(viewNameOrObject)
    return
  }

  return window.switchView(viewNameOrObject);
}



*/



export const switchView=(viewNameOrObject,targetViewData)=>{

  if(typeof(viewNameOrObject)==="string"){
    const view = currentScenario().viewList.find(view=>view.viewkey===viewNameOrObject);

    if(!view){
      console.error("trying to switch to view: ", viewNameOrObject,"candidate are ", currentScenario().viewList.map(v=>v.viewkey) )
      return null;
    }

    if(targetViewData){
      viewDataOf(viewNameOrObject,targetViewData);
    }
    window.switchView(view);

    return
  }
  if(targetViewData){
    viewDataOf(viewNameOrObject.name,targetViewData);
  }

  return window.switchView(viewNameOrObject);
}


export const currentView=(newCurrentView)=>{


  return currentScenario().currentView;
}


const functions={dynaApp,currentScenario,scenarioMeta,switchView,switchToView,switchScenario,isOverlayView,currentView,viewByName,viewDataOf}
//import ={dynaApp,currentScenario,scenarioMeta,switchView,switchScenario,viewDataOf,currentView} from '../../service/kernal'
export default functions;

