import React from "react";
import './MainService.css'

const MainService = () => {
    return(
        <>
        <div className="service-container">
            <div className="front-service">
            <img className="service-pic" src="frontpic.jpg" alt="front"/>
                <h1 className="h1-service">FrontEnd</h1>
                <p>we do the front-end work for you with the best possible quality!</p>
            </div>
            <div className="front-service">
            <img className="service-pic" src="api.jpg" alt="front"/>
                <h1 className="h1-service">Api</h1>
                <p>we do the api work!</p>
                </div>
                <div className="front-service">
            <img className="service-pic" src="database.jpg" alt="front"/>
                <h1 className="h1-service">Backend</h1>
                <p>we do the Backend work!</p>
                </div>
        </div>
        </>
    )
}

export default MainService