import { Dropdown } from 'antd';
import React from 'react';
import styles from './styles.less';
import UserInfo from './user-info';

const UserInfoDropdown = (props) => {
  const { name, employeeNo, mobile, currentFactory, roleList = [] } = props;
  const overlay = <UserInfo
    name={name}
    employeeNo={employeeNo}
    mobile={mobile}
    currentFactory={currentFactory}
    roleList={roleList}
  />;

  return (
    <Dropdown placement='bottomLeft' overlay={overlay}>
      <span className={styles.name}>{`${name} | ${employeeNo}`}</span>
    </Dropdown>
  );
};

export default UserInfoDropdown;
