import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmpireDetail = () => {
    const { id } = useParams();
    const [empireDetails, setEmpireDetails] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchEmpireDetails = async () => {
            try {
                const response = await fetch(`http://145.24.222.150:8000/empires/${id}`);  // fetch met id
                const data = await response.json();
                setEmpireDetails(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchEmpireDetails();
    }, [id]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='content-center justify-center '>
                    <h1 className='text-9xl mt-14'> {empireDetails.civilization}</h1>
                    {/* Nadat API is aangepast foto hier plaatsen */}
                    <p className='font-bold'>Specialty: {empireDetails.specialty}</p>
                    <p className='font-bold'>Army: {empireDetails.army}</p>
                    <p className='font-bold'>Difficulty: {empireDetails.difficulty}</p>
                    {/* Nadat API is aangepast beschrijving hioer plaatsen */}

                </div>
            )}
        </div>
    );
};

export default EmpireDetail;