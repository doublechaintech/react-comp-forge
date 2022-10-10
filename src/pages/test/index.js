import React from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import localeText from './component/localeText';
import EleUserName from './component/ele-user-name';
import EleSex from './component/ele-sex';


// const columnTypes={
//   dateColumn: {
//     filter: 'agDateColumnFilter',
//     filterParams: { comparator: myDateComparator },
//     suppressMenu: true
//   }
// }

const columns = [
  { headerName: '姓名', field: 'name', 'pinned': 'left', type: 'ele-user-name' },
  { headerName: '性别', field: 'sex', type: 'ele-sex',   autoHeight:true },
  { headerName: '年龄', field: 'age' },
  { headerName: '籍贯', field: 'jg' },
  { headerName: '省份', field: 'sf' },
  { headerName: '地址', field: 'dz' },
];

const data = [
  { name: '张三', sex: '男', age: '100', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路1号' },
  { name: '李四', sex: '女', age: '5', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '女', age: '20', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路31号' },
  { name: '王五', sex: '女', age: '26', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路111号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
  { name: '王五', sex: '男', age: '35', 'jg': '中国', 'sf': '浙江', 'dz': '杭州市古墩路12号' },
];


const columnTypes = {
  'ele-user-name': {
    cellRendererFramework: EleUserName,
  },
  'ele-sex': {
    cellRendererFramework: EleSex,
  },
};

export default () => {

  return (
    <div style={{ height: '90vh' }}>

      <AgGridReact
        localeText={localeText}
        reactUi='true'
        className='ag-theme-alpine'
        animateRows='true'
        modules={[ClientSideRowModelModule]}
        columnDefs={columns}
        columnTypes={columnTypes}
        defaultColDef={{
          resizable: true,
          sortable: true,
          editable: true,//单元表格是否可编辑
          enableRowGroup: true,
          enablePivot: true,
          enableValue: true,
          filter: true,  //开启刷选
        }}
        enableRangeSelection='true'
        rowData={data}
        rowSelection='multiple'
        suppressRowClickSelection='true'
      />
    </div>
  );
}
