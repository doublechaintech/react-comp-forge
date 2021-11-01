import styles from './styles.less';
import UserInfoDropdown from '@/components/user-info-dropdown/user-info-dropdown';
import HomeAdList from '@/components/ad-list/home-ad-list';


export default function TestPage() {

  return (
    <div className={styles.container}>
      <HomeAdList />
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
