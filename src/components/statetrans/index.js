import { Tabs } from 'antd';
import { Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { useState } from 'react';
import styles from './index.less'
import status from './status.json'
import locations from './locations.json'
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i)

export default function StateTrans (props)  {


  return (<div>
    <Row>

      <Col span={12}>

      <Row>
          <Col span={8}>

          </Col>
          <Col span={8}>
          <span className={styles.label}>操作前状态</span>
          </Col>
          <Col span={8}>
          <span className={styles.label}>操作后状态</span>
          </Col>
      </Row>



{range(0,15).map(indexCase=>(
  <Row>
    <Col span={8} >
     <input type="checkbox" />情形{indexCase+1}
    </Col>
    <Col span={8}>
     <select className={styles.select}>{status.map((item,index)=>(<option value={item.code}>S-{index+1} {item.name}</option>))}</select>
    </Col>
    <Col span={8}>
     <select className={styles.select}>{status.map((item,index)=>(<option value={item.code}>S-{index+1} {item.name}</option>))}</select>
    </Col>
  </Row>
))}


      </Col>
      <Col span={12} >


      <Row>
          <Col span={8}>

          </Col>
          <Col  span={8}>
          <span className={styles.label}>操作前库位</span>
          </Col>
          <Col  span={8}>
          <span className={styles.label}>操作后库位</span>
          </Col>
      </Row>



      {range(0,2).map(indexCase=>(
        <Row>
          <Col span={8}>
          <input type="checkbox" />情形{indexCase}
          </Col>
          <Col span={8}>
          <select className={styles.select}>{locations.map((item,index)=>(<option value={item.code}>H-{index+1} {item.name}</option>))}</select>
          </Col>
          <Col span={8}>
          <select className={styles.select}>{locations.map((item,index)=>(<option value={item.code}>H-{index+1} {item.name}</option>))}</select>
          </Col>
        </Row>
      ))}

      </Col>
    </Row>



  </div>)


}


/*

| CHECKED_AFTER_FILL;待分析                 |
| CHECKED_BEFORE_FILL;充装前检查完毕        |
| CUSTOMER;已配送                           |
| DELIVERY;配送在途                         |
| DISABLED;冻结                             |
| DISCARDED;报废                            |
| EMPTY;空                                  |
| EMPTY_CHECKED;空，已预检                  |
| EMPTY_PICKED;空，已拣配                   |
| FILLED;充装中检查完毕                     |
| FULL;满瓶                                 |
| FULL_PICKED;满瓶，已拣配                  |
| INTERNAL_USE;内部领用                     |
| LOST;丢失                                 |
| MAINTAIN;维修                             |
| SELLED;出售                               |




*/
