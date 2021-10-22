import { useState } from 'react';
import styles from './index.css';

import Access from '../components/access';
import 'antd/dist/antd.css';

export default function() {
  return (
    <div className={styles.normal}>
      <Access />
    </div>
  );
}
