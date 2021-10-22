import { useState } from 'react';
import styles from './index.css';


const Counter=(props)=>{

  const [count,setCount]=useState(props.start)

  return <span>start={props.start} count={count}
  <button onClick={()=>setCount(prev=>prev+1)}>+</button>
  </span>


}

const Wrapper=()=>{

  const [start,setStart]=useState(10)

  return  <div><span>{start}</span>
    <button onClick={()=>setStart(0)}>startFrom0</button>
    <button onClick={()=>setStart(100)} >startFrom100</button>
  <Counter key={0} start={start}/></div>


}

export default function() {
  return (
    <div className={styles.normal}>
      <Wrapper />
    </div>
  );
}
