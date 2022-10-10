export function logDebug(){

  const finalmessage=[];
  for (var i = 0; i < arguments.length; i++) {
    const value=arguments[i];
    if(typeof(value)==="string"){
      finalmessage[i]=value;
    }
    if(typeof(value)==="object"){
      finalmessage[i]=JSON.stringify(value);
    }

  }
  console.log(finalmessage.join(", "));
}


export const showLogData=({label,data,format})=>{


  return (<form style={{"margin":"15px",padding:"14px",fontSize:"10px",backgroundColor:"#eeeeee"}}>
      <fieldset style={{backgroundColor:"#eeeeee"}}>
        <legend >{label}</legend>
        <pre>{JSON.stringify(data,null,format?0:2)}</pre>
      </fieldset>
    </form>)

}

export const showLogData2=({label,data,format})=>{

  return (<fieldset >
  <legend>box</legend>
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td>&nbsp;</td>
    </tr>
  </table>
</fieldset>)

}


/*
style={{border:"1px solid"}}
 <fieldset>
    <legend>Choose your favorite monster</legend>

  </fieldset>
<fieldset class="field_set">
  <legend>box</legend>
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td>&nbsp;</td>
    </tr>
  </table>
</fieldset>


*/





console.log("sdfdsf")
logDebug("a","b","c",{a:"sdf"})
