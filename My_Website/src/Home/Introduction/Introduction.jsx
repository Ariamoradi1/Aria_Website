import React from "react";
import './Introduction.css'

const Introduction = () => {
    return(
        <>
        <div className="Introduction">
        <h1 className="res-h1" style={{textAlign:'center', marginTop:'70px', color:'white'}}>Welcome to my website!</h1>
        {/* <p className="section-p">Hello Friends.<br></br>my name is Aria, i 19 years old.<br></br>i have been very found of
        video gamessince i was a child, and it was here that i became very interested in computers!
        <br/>
        I have developed interest in web and front-end programming in the past year.<br/>and from the age of 18 to I went to my passion and with enthusiasm<br/>
        i started learning and now i follow with motivation! <br/> i will new challenges and team work all information and things learned
        during this time i got to work! <br/>my skills now is: html5, css, java script, react library, sass,
        and bootstrap</p> */}
          <div  className="section-p">
        <p> Hello Friends.</p>
        <p>my name is Aria, i 19 years old.</p>
        <p>i have been very found of
        video gamessince i was a child, and it was here that i became very interested in computers!</p>
        <p> I have developed interest in web and front-end programming in the past year.</p>
        <p>and from the age of 18 to I went to my passion and with enthusiasm</p>
        <p>i started learning and now i follow with motivation!</p>
        <p>i will new challenges and team work all information and things learned
        during this time i got to work!</p>
          <p>my skills now is: html5, css, java script, react library, sass,
        and bootstrap</p>
      </div> 
        </div>
        </>
    )
}

export default Introduction