import React, { useEffect, useState } from "react";
import EmpireList from "./EmpireList";
import InputForm from "./InputForm.jsx";
import {useNavigate} from "react-router-dom";

function Empires() {
    const [empires, setEmpires] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate=useNavigate()

    useEffect(() => {
        const fetchEmpires = async () => { // fetch van eigen API loading staat er in maar nergens gebruikt
            try {
                const response = await fetch("http://145.24.222.150:8000/empires");
                const data = await response.json();
                setEmpires(data.items);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchEmpires();
    }, []);

    // const addEmpire = async (empireData) => {
    //     try {
    //         const response = await fetch('http://145.24.222.150:8000/empires' , {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(empireData),
    //         });
    //         const data = await response.json();
    //         setEmpires([...empires, data]);
    //     } catch (error) {
    //         console.error('Error by adding Empire', error);
    //     }
    // }

    const items = empires && empires.length > 0 ? empires : null;  // dit wordt gebruikt om de waarde toe te kunnen wijzen

    return (

        <div>

            {items && <EmpireList items={items} />}    {/* AND logica (zelfde logica als Elektrotechniek DigitalLogics101^^) gebruikt om de items te controleren en door sturen naar de lijst */}




            <button
                onClick={() => navigate('/create')}
                className=' ml-7 bg-yellow-600 rounded-lg w-[140px] h-[70px] shadow-lg' > Create </button>    {/*create button */}
        </div>
    );
}

export default Empires;