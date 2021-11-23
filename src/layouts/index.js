import styles from './index.css';

function BasicLayout(props) {
  if (props.location.pathname === '/test') {
    return <div>{ props.children }</div>
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>组件测试</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
