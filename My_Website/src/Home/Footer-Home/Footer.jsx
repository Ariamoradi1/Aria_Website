import React from "react";
import "./Footer.css"
import { AiOutlineGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"

const Footer = () => {
    return(
        <>
        <footer>
            
            <div className="footer-icon">
            <a href="https://twitter.com/AriaManProMax"><AiOutlineTwitter style={{color:'aqua', fontSize:'30px'}} /></a>
        <a href="https://github.com/Ariamoradi1"><AiOutlineGithub style={{color:'aqua', fontSize:'30px'}} /></a>
       <a href="https://www.linkedin.com/in/aria-moradi-a4402a244/?_l=en_US"> <AiFillLinkedin style={{color:'aqua', fontSize:'30px'}} /></a>
           <a href="https://t.me/Aria_Man12"> <FaTelegramPlane style={{color:'aqua', fontSize:'30px'}}/></a>
           <a href="https://discord.com/Aria_Man#0743"> <FaDiscord style={{color:'aqua', fontSize:'30px'}}/></a>
           <a href="https://instagram.com/__arius_"> <BsInstagram style={{color:'aqua', fontSize:'30px'}}/></a>
            </div>
            <p style={{textAlign:'center', marginTop:'100px'}}>Developer : Aria Moradi</p>
            <p style={{textAlign:'center'}}>© 2022 Aria Man Technology, Inc.</p>
        </footer>
        
        </>
    )
}

export default Footer