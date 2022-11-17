import React from "react";
import "./Progress.css"
const Progress = () => {
     return(
        <>
        <h1 style={{textAlign:'center', marginTop:'70px'}}>my programming skills</h1>
        <p>Html: 100%</p> <progress style={{marginTop:'30px'}} value="100" max="100"/>
        <p>Css: 90%</p> <progress style={{marginTop:'30px'}} value="90" max="100"/>
        <p>java script: 95%</p> <progress style={{marginTop:'30px'}} value="95" max="100"/>
        <p>sass: 90%</p> <progress style={{marginTop:'30px'}} value="90" max="100"/>
        <p>bootstrap: 85%</p> <progress style={{marginTop:'30px'}} value="85" max="100"/>
        <p>react: 80%</p> <progress style={{marginTop:'30px'}} value="80" max="100"/>

        <h1 style={{textAlign:'center', marginTop:'70px'}}>language skill</h1>

       <p>writing skill: 80%</p> <progress style={{marginTop:'30px'}} value="80" max="100"/>
        <p>reading skill: 90%</p> <progress style={{marginTop:'30px'}} value="90" max="100"/>
        <p>speaking skill: 60%</p> <progress style={{marginTop:'30px'}} value="60" max="100"/>
        </>
     )
}

export default Progress