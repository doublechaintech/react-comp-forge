import { Tabs } from 'antd';
import { Checkbox, Button } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import menuData from './menu.json'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const getLine=({lines,index})=>{


  const lineNumber=Math.floor(index/6);

  if(!lines[lineNumber]){
    console.log("lines[lineNumber]",lines[lineNumber],lineNumber)
    lines[lineNumber]=[]
    return lines[lineNumber]
  }


  return lines[lineNumber];


}
const splitIntoLines=()=>{

  const lines=[]

  menuData.menuGoupList.forEach((group,index)=>{

    const line=getLine({lines,index});
    line.push(group);



  })

  return lines;



}


export default function Access (props)  {

  const [checked,setChecked]=useState(false)

  const onChange = e => {
    setChecked(!e.target.value)
  };





  return   (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Web端权限" key="1">


      {splitIntoLines().map(line=>(
        <Row style={{borderBottom:"solid darkblue", padding:"10px"}}>
          {line.map(group=>(<Col span={4} style={{padding:"10px",display: "flex-start", alignItems:"start"}}>
             <div style={{padding:"10px",textAlign:"left"}}>{group.name}</div>
          {group.subMenuList.map(item=>(
          <div style={{fontSize:"10px",textAlign:"left"}}><Checkbox checked={checked} onChange={onChange}>{item.name}</Checkbox>
          </div>))}
          </Col>))}

           </Row>
      ))}







  </TabPane>
  <TabPane tab="App端权限" key="2">
    Content of Tab Pane 2
  </TabPane>

</Tabs>
);

}



