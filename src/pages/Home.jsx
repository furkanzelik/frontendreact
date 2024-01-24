import React from "react";
import Search from "../components/Search.jsx";
import IntroPost from "../components/IntroPost.jsx";
import Empires from "../components/Empires.jsx";
import Footer from "../components/Footer.jsx";


function Home(){
    return(
        <div className='p-[20px]' >
            <Search/>
            <IntroPost/>
            <Empires/>
            <Footer/>
        </div>
    );
}

export default Home