
import React from 'react';
import {Routes, Route, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home.jsx';
import EmpireDetail from './pages/empireDetail.jsx';
import './App.css'
import Header from "./components/Header.jsx";
import InputForm from "./components/InputForm.jsx";





function App() {
    return (
        <div className='p-[20px]'>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/empire-detail/:id" element={<EmpireDetail/>}> </Route>
                <Route path="/create" element={<InputForm/>}> </Route>
            </Routes>
        </div>
    );
}

export default App;
