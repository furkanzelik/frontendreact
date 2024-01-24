import React, {useState} from "react";
import Empires from "./Empires.jsx";

const InputForm = ({ addEmpire, updateEmpire, initialData }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.id) {
            updateEmpire(formData);
        } else {
            addEmpire(formData);
        }
        setFormData({ id: '' , civilization: '' , speciality: '' , army: '' , difficulty: '' });
    }


    return (
        <div className='mt-14 font-serif ml-20'>
            <h1 className='text-5xl mb-3 mt-4 font-serif' >Create a new Empire!</h1>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <label className="mb-2">
                    Name of Empire:
                    <input type="text" name="civilization" value={formData?.civilization || ''}
                           onChange={handleInputChange} className="border p-2"/>
                </label>
                <label className="mb-2">
                    Best Speciality:
                    <input type="text" name="speciality" value={formData?.speciality || ''} onChange={handleInputChange}
                           className="border p-2"/>
                </label>
                <label className="mb-2">
                    Parts of Army:
                    <input type="text" name="army" value={formData?.army || ''} onChange={handleInputChange}
                           className="border p-2"/>
                </label>
                <label className="mb-2">
                    Difficulty:
                    <input type="text" name="difficulty" value={formData?.difficulty || ''} onChange={handleInputChange}
                           className="border p-2"/>
                </label>
            </form>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
    );
};

export default InputForm;
