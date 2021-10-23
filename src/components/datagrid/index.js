
import fieldList from './fieldlist.json'
import data from './data.json'

import DataGrid from 'react-data-grid';

const formatValue=(props)=>{
  //console.log("cell props", props);
  const key=props.column.key
  const value=props.row[key]
  return <span title={JSON.stringify(props)}>{value}</span>;
}



const mapFieldsToDataGridSpec=({fieldList})=>{

  return fieldList.map(field=>{
    const formatter=formatValue;

    return {...field,key:field.dataIndex,__key:field.key,name:field.title,formatter}

  })

}

const mapDataToDataGridSpec=({data})=>{

  return data.map(item=>{

    return {...item,actions:"--"}

  })

}



export default function App() {
  console.log("mapFieldsToDataGridSpec({fieldList})",mapFieldsToDataGridSpec({fieldList}));
  console.log("mapDataToDataGridSpec({data})",mapDataToDataGridSpec({data}));

  return <><DataGrid

    columns={mapFieldsToDataGridSpec({fieldList})}
    rows={mapDataToDataGridSpec({data})} />

    </>;
}
