
import React from 'react';
import { AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


//definitions https://ag-grid.com/javascript-data-grid/column-definitions/



const App = () => {
   const rowData = [
       {make: "Toyota", model: "Celica", price: 35000},
       {make: "Ford", model: "Mondeo", price: 32000},
       {make: "Porsche", model: "Boxter", price: 72000}
   ];

   const colDefs=[
    {field: 'make',headerName:"Makeee"},
    {field: 'model'},
    {field: 'price', editable: 'true'},
]

   return (
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={colDefs}
               defaultColDef={{sortable: true, filter: true,checkboxSelection:true }}
               >

           </AgGridReact>
       </div>
   );
};



export default App;
