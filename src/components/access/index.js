import { Tabs } from 'antd';
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import pcMenuData from './pcmenu.json'
import appMenuData from  './appmenu.json'


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


export default function Access (props)  {

  const [checkStatus,setCheckStatus]=useState([])

  const onChange = ({event,itemName}) => {

    const value=[];
    value[itemName]=event.target.checked
    setCheckStatus({...checkStatus,...value})

    //setChecked(event.target.checked)
  };


  return   (
    <Tabs defaultActiveKey="1" onChange={callback} style={{padding:"20px",backgroundColor:"rgba(242, 242, 242, 1)"}}>
      <TabPane tab="Web端权限" key="1">


      {splitIntoLines({menuData:pcMenuData}).map(line=>(
        <Row style={{borderBottom:"solid darkblue", padding:"10px"}}>
          {line.map(group=>(<Col span={4} style={{padding:"10px",display: "flex-start", alignItems:"start"}}>
             <div style={{textAlign:"left"}}>{group.name}</div>
          {group.subMenuList.map(item=>(
          <div style={{fontSize:"10px",textAlign:"left"}}>
            <Checkbox checked={checkStatus[item.name]} onChange={(event)=>onChange({event,itemName:item.name})}>{item.name}</Checkbox>
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
            <Checkbox checked={checkStatus[item.name]} onChange={(event)=>onChange({event,itemName:item.name})}>{item.name}</Checkbox>
          </div>))}
          </Col>))}

           </Row>
      ))}


  </TabPane>

</Tabs>
);

}


/*

强制状态转换
资产信息查询
资产冻结
资产调拨
资产挂失


*/


