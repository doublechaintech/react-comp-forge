import styles from './styles.less';
import { Button } from 'antd';
import GraphObject from '@/pages/test/graph-object';
import mockData from './mock-data';
import _ from 'lodash';

export default function Index() {

  const handleClick = () => {
    const resp = _.cloneDeep(mockData);
    console.log('before 1', resp.data[0].merchant.parentMerchantList[1].name);
    console.log('before 2', resp.data[1].name);

    const obj = GraphObject.parse(resp);
    obj.data[0].merchant.parentMerchantList[1].name = '四川航空';

    console.log('after 1', obj.data[0].merchant.parentMerchantList[1].name);
    console.log('after 2', obj.data[1].name);


    const resp2 = JSON.parse(GraphObject.stringify(obj));
    console.log('resp2', resp2);


    const obj2 = GraphObject.parse(resp2);
    obj2.data[0].merchant.parentMerchantList[1].name = '四川航空222';

    console.log('after 1', obj2.data[0].merchant.parentMerchantList[1].name);
    console.log('after 2', obj2.data[1].name);


  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClick}>parse</Button>
    </div>
  );
};
