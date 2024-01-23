import React, {useEffect, useState} from "react";
import {data} from "autoprefixer";
import EmpireList from "./EmpireList";

function Empires(){

    const [empires, setEmpires] = useState([]);


    useEffect(() => {
       fetch('http://145.24.222.150:8000/empires')
       .then( res => {
           return res.json();
       })
           .then(data => {
               // console.log(data);
              setEmpires(data)
            } )

    })


    let items ;
    return (
           <div>
               Empires
               { items && <EmpireList items={items} /> }
           </div>
       );
}

export default Empires