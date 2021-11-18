import { Carousel } from "antd";
import styles from "./home-carousel.less";

import slide1 from "./slide-1.png";
import slide2 from "./slide-2.png";

//export default function HomeCarousel({ items = [] }) {

export default function HomeCarousel() {
  const items = [
    { id: "s1", imageUrl: slide1 },
    { id: "s2", imageUrl: slide2 },
  ];

  return (
    <Carousel className={styles.container}>
      {items.map((it, idx) => (
        <div key={it.id + idx} className={styles.carouselItem}>
          <img src={it.imageUrl} alt="" />
        </div>
      ))}
    </Carousel>
  );
}
