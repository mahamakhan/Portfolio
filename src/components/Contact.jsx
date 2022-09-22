import React from "react";
import {AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlinePhone} from 'react-icons/ai'

export default function Contact(){
    return(
        <div className="contactpage" >
        <h1>Contact</h1>
        <div className="contact">
        <a href="mailto:mahamimranamjad@gmail.com"><AiOutlineMail color={"lightgrey"} size= '4em'/></a>
        <a href="https://www.linkedin.com/in/mahamakhan/"><AiFillLinkedin color={"lightgrey"} size= '4em'/></a>
        <a href="https://github.com/mahamakhan"><AiFillGithub color={"lightgrey"} size= '4em'/></a>
        <a href="tel:8316435614"><AiOutlinePhone color={"lightgrey"} size= '4em'/></a>
        </div>
        </div>
    )
}