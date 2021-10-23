

import processImage from './process.png'
import styles from './index.less'
import { useState } from 'react'



const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i)

export default function Process(props){


  const [values,setValues]=useState([])

  const handleChange=({event,index})=>{
    const newValue=[]
    newValue[index]=event.target.checked
    console.log("event.target.checked->"+index,event.target.checked)
    setValues({...values,...newValue})
  }

  return <div className={styles.container}><img src={processImage} width={800} alt={`process`}/>

{

  range(0,26).map(index=><div key={`checkbox-${index}`} className={styles[`cell${index}`]}>
  <input  checked={values[index]||false} className={styles.checkbox} title={index} type="checkbox" id={index} onChange={(event)=>handleChange({event,index})}/>
  </div>)
}



  </div>


}

