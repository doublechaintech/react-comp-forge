import styles from './styles.less';
import UserInfoDropdown from './user-info-dropdown/user-info-dropdown';

export default function TestPage() {

  return (
    <div className={styles.container}>
      <UserInfoDropdown
        name={'周廷志'}
        employeeNo={'11308'}
        mobile={'13880964614'}
        currentFactory={'珠江工厂'}
        roleList={['司机', '车间主任']}
      />
    </div>
  );
};
