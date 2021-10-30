import { ApartmentOutlined, IdcardOutlined, ProfileOutlined, StarFilled } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './styles.less';

const LineItem = ({ title, icon, brief, onClick }) => {
  const rootClass = classNames(styles.lineItem, {
    [styles.clickable]: typeof onClick === 'function',
  });
  return (
    <div className={rootClass} onClick={onClick}>
      <div className={styles.lineItemTitle}>
        {icon}{title}
      </div>
      <div className={styles.lineItemBrief}>{brief}</div>
    </div>
  );
};


export default function UserInfo(props) {
  const { name, employeeNo, mobile, currentFactory, roleList = [] } = props;

  return (
    <div className={styles.container}>
      <div className={styles.cardTitle}>{name}</div>
      <LineItem title='工号' icon={<IdcardOutlined />} brief={employeeNo} />
      <LineItem title='电话' icon={<StarFilled />} brief={mobile} />

      <div className={styles.line} />

      <LineItem title='登录组织' icon={<ApartmentOutlined />} brief={currentFactory} />
      <LineItem title='角色信息' icon={<ProfileOutlined />} brief={roleList.join(',')} />
    </div>
  );
};
