import { Col, Row } from 'antd';
import { AlertOutlined, DeploymentUnitOutlined, LineChartOutlined, TransactionOutlined } from '@ant-design/icons';
import styles from './home-ad-list.less';

const AdItem = ({ title, brief, icon }) => (
  <Col className={styles.item}>
    <div className={styles.itemTitle}>{title}</div>
    <div className={styles.itemBrief}>{brief}</div>
    <div className={styles.itemIcon}>{icon}</div>
  </Col>
);


export default function HomeAdList() {

  return (
    <Row className={styles.container}>
      <AdItem title='流转率统计' brief='按照资产类别或产品，实时计算流转率' icon={<DeploymentUnitOutlined />} />
      <AdItem title='满载率统计' brief='查询配送货车满载率，提升运输效率' icon={<AlertOutlined />} />
      <AdItem title='充装量统计' brief='各工厂、工人、工位、产品充装量' icon={<LineChartOutlined />} />
      <AdItem title='销售量统计' brief='各工厂产品销售量' icon={<TransactionOutlined />} />
    </Row>
  );
};
