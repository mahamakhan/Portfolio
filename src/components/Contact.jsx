import React from "react";
import {AiOutlineMail, AiFillLinkedin, AiFillGithub, AiOutlinePhone} from 'react-icons/ai'

export default function Contact(){
    return(
        <div >
        <h1>Contact</h1>
        <a href="mailto:mahamimranamjad@gmail.com"><AiOutlineMail color={"grey"}/></a>
        <a href="https://www.linkedin.com/in/mahamakhan/"><AiFillLinkedin color={"grey"}/></a>
        <a href="https://github.com/mahamakhan"><AiFillGithub color={"grey"}/></a>
        <a href="tel:8316435614"><AiOutlinePhone color={"grey"}/></a>
        </div>
    )
}