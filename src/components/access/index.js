import { Tabs } from 'antd';
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState,useEffect } from 'react';
import pcMenuData from './pcmenu.json'
import appMenuData from  './appmenu.json'
import {get} from '../../service/http'

import 'antd/dist/antd.less'

import  './index.less';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const getLine=({lines,index})=>{


  const lineNumber=Math.floor(index/6);

  if(!lines[lineNumber]){
    //console.log("lines[lineNumber]",lines[lineNumber],lineNumber)
    lines[lineNumber]=[]
    return lines[lineNumber]
  }



  return lines[lineNumber];


}
const splitIntoLines=({menuData})=>{

  const lines=[]

  menuData.menuGroupList.forEach((group,index)=>{

    const line=getLine({lines,index});
    line.push(group);


  })

  return lines;



}

async function fetchMenu({url,setMenuData}){


  const data=await get({url})
  if(!data || !data.children){
    return;
  }

  setMenuData(data)


}
export default function Access (props)  {

  const [checkStatus,setCheckStatus]=useState({})
  const {handleJobTypeAccessChange}=props
  const [menuData,setMenuData]=useState([])

  const onChange = ({event,item}) => {

    const value={...item,enable:event.target.checked};
    checkStatus[item.code]=value
    setCheckStatus({...checkStatus,...value})
    if(handleJobTypeAccessChange){
      handleJobTypeAccessChange({checkStatus})
    }
    //setChecked(event.target.checked)
  };





  useEffect(()=>{

    const url='secUserManager/getFullMenu/'
    fetchMenu({url,setMenuData})

  },[])



  return   (
    <Tabs defaultActiveKey="1" onChange={callback} style={{padding:"20px",backgroundColor:"rgba(242, 242, 242, 1)"}}>

    {menuData&&menuData.children&&menuData.children.map((rootMenu,index)=>(rootMenu&&<TabPane key={rootMenu.code} tab={rootMenu.name} key={index}>

      <Row style={{borderBottom:"solid darkblue", padding:"10px"}}>
      {rootMenu.children&&rootMenu.children.map((group,groupIndex)=>(

        <Col span={4} style={{padding:"10px",display: "flex-start", alignItems:"start"}}>
         <div key={group.code} style={{textAlign:"left"}}>{`${groupIndex+1}-${group.name}`}</div>
          {
          group.children&&group.children.map(item=>
          <div key={item.code} style={{fontSize:"10px",textAlign:"left"}}>
                      <Checkbox checked={checkStatus[item.code]} onChange={(event)=>onChange({event,item})}>{item.name}</Checkbox>
                    </div>
          )
          }

         </Col>
       ))}</Row>



    </TabPane>))}





</Tabs>
);

}


/*

强制状态转换
资产信息查询
资产冻结
资产调拨
资产挂失


  return   (
    <Tabs defaultActiveKey="1" onChange={callback} style={{padding:"20px",backgroundColor:"rgba(242, 242, 242, 1)"}}>
      <TabPane tab="Web端权限" key="1">


      {splitIntoLines({menuData:pcMenuData}).map(line=>(
        <Row style={{borderBottom:"solid darkblue", padding:"10px"}}>
          {line.map(group=>(<Col span={4} style={{padding:"10px",display: "flex-start", alignItems:"start"}}>
             <div style={{textAlign:"left"}}>{group.name}</div>
          {group.subMenuList.map(item=>(
          <div style={{fontSize:"10px",textAlign:"left"}}>
            <Checkbox checked={checkStatus[item.linkto]} onChange={(event)=>onChange({event,item})}>{item.name}</Checkbox>
          </div>))}
          </Col>))}

           </Row>
      ))}



  </TabPane>
  <TabPane tab="App端权限" key="2">


  {splitIntoLines({menuData:appMenuData}).map(line=>(
        <Row style={{borderBottom:"solid darkblue", padding:"10px"}}>
          {line.map(group=>(<Col span={4} style={{padding:"10px",display: "flex-start", alignItems:"start"}}>
             <div style={{textAlign:"left"}}>{group.name}</div>
          {group.subMenuList.map(item=>(
          <div style={{fontSize:"10px",textAlign:"left"}}>
            <Checkbox checked={checkStatus[item.linkto]} onChange={(event)=>onChange({event,item})}>{item.name}</Checkbox>
          </div>))}
          </Col>))}

           </Row>
      ))}


  </TabPane>

</Tabs>
);



*/


