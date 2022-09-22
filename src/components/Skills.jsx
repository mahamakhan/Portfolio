import React from "react";
import {SiExpress, SiDjango,SiHtml5,SiTailwindcss,SiCss3,SiReact,SiNodedotjs,SiMongodb,SiPython,SiPostgresql,SiSequelize,SiHeroku,SiGithub} from 'react-icons/si'
import {RiVuejsFill} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'
export default function Skills(){
    return(
        <div className="skillspage">
            <h1>Skills</h1>
        
        <div className="skills">
        <RiVuejsFill className="icons" size= '3em'/>
        <SiDjango className="icons" size= '3em'/>
        <SiHtml5 className="icons" size= '3em'/>
        <SiTailwindcss className="icons" size= '3em'/>
        <SiCss3 className="icons" size= '3em'/>
        <SiReact className="icons" size= '3em'/>
        <TbBrandJavascript className="icons" size= '3em'/>
        <SiNodedotjs className="icons" size= '3em'/>
        <SiExpress className="icons" size= '3em'/>
        <SiMongodb className="icons" size= '3em'/>
        <SiPython className="icons" size= '3em'/>
        <SiPostgresql className="icons" size= '3em'/>
        <SiSequelize className="icons" size= '3em'/>
        <SiHeroku className="icons" size= '3em'/>
        <SiGithub className="icons" size= '3em'/>
        </div>
        </div>
    )
}