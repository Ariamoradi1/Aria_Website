import React from "react";
import Header from "../Home/Header/Header";
import './Contact.css'
import Footer from "../Home/Footer-Home/Footer"

const Contact = () => {
    return(
        <>
        <Header/>
        
        <div className="style-company">
        <h1>Paisley Digital...</h1>
            <div className="container-paisley">
            <div className="paisley-service">
            <img className="contact-pic" src="paisley.png" alt="front"/>
                <h1 className="h1-contact">Paisley digital</h1>
                <p className="p-contact">Paisley Digital is a Digital Enabelement Team Of Highly<br/>skilled Talents Who Can Help You Bulid A Product From Zero To Hero

            </p>
            <p>Phone: +1 415-230-0007</p>
            <p>Email:  hello@paisley.digital</p>
            </div>
            </div>
        
        </div>
        <Footer/>
        </>
    )
}

export default Contact