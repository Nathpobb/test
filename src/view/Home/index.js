import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Color(){
    const [ColorHis, setClick] = useState([]);
    
    const REDCLICK = () =>{
        setClick([...ColorHis,{color: 'red'}])
    }
    -=
    const YELLOWCLICK = () =>{
        setClick([...ColorHis,{color: 'yellow'}])
    }

    const GREENCLICK = () =>{
        setClick([...ColorHis,{color: 'green'}])
    }

return(<>
<div className="flex justify-center">
    <button style={{backgroundColor: 'red'}} onClick={REDCLICK}>RED</button> 
    <button style={{backgroundColor: 'yellow',margin:20}} onClick={YELLOWCLICK}>YELLOW</button> 
    <button style={{backgroundColor: 'green'}}onClick={GREENCLICK}>GREEN</button>
</div>
<table className="table table-hover">
<thead>
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col">color</th>
          </tr>
        </thead>
        <tbody>
            {ColorHis.map((color,index)=>(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{color.color}</td>
                </tr>
            ))}
        </tbody>
</table>
</>)    
}


export default Color