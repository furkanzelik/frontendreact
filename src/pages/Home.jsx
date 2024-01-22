import React from "react";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import IntroPost from "../components/IntroPost.jsx";
import Blogs from "../components/Blogs.jsx";
import Footer from "../components/Footer.jsx";

function Home(){
    return(
        <div>
            <Header/>
            <Search/>
            <IntroPost/>
            <Blogs/>
            <Footer/>
        </div>
    )
}

export default Home