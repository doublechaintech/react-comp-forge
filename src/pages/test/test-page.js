import styles from './styles.less';
import UserInfoDropdown from '@/components/user-info-dropdown/user-info-dropdown';
import HomeAdList from '@/components/ad-list/home-ad-list';
import HomeCarousel from '@/components/ad-list/home-carousel';


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

      <HomeCarousel
        items={[
          { id: 1, imageUrl: require('./slide-1.png') },
          { id: 2, imageUrl: require('./slide-2.png') },
        ]} />
      <div style={{ marignTop: 40 }}>
        <HomeAdList />
      </div>

    </div>
  );
};
