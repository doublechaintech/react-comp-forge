import { Carousel } from 'antd';
import styles from './home-carousel.less';

export default function HomeCarousel({ items = [] }) {

  return (
    <Carousel className={styles.container}>
      {
        items.map((it, idx) => (
          <div key={it.id + idx} className={styles.carouselItem}>
            <img src={it.imageUrl} alt='' />
          </div>
        ))
      }
    </Carousel>
  );
};
