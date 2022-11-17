import React from "react";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";
import Progress from "./Progress/Progress";
import Project from "./Projects/Project";
import Me from "./Me/Me";
import Footer from "./Footer-Home/Footer";
const Home = () => {
    return(
        <>
        
        <Header/>
        <Introduction/>
         <Progress/>
        <Project/>
        <Me/>
        <Footer/>
        
        </>
    )
}

export default Home