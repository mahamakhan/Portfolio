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
        <h5>VueJs</h5>
        <SiDjango className="icons" size= '3em'/>
        <h5>Django</h5>
        <SiHtml5 className="icons" size= '3em'/>
        <h5>HTML</h5>
        <SiTailwindcss className="icons" size= '3em'/>
        <h5>Tailwind</h5>
        <SiCss3 className="icons" size= '3em'/>
        <h5>CSS</h5>
        <SiReact className="icons" size= '3em'/>
        <h5>React</h5>
        <TbBrandJavascript className="icons" size= '3em'/>
        <h5>Javascript</h5>
        <SiNodedotjs className="icons" size= '3em'/>
        <h5>Node.js</h5>
        <SiExpress className="icons" size= '3em'/>
        <h5>Express</h5>
        <SiMongodb className="icons" size= '3em'/>
        <h5>MongoDb</h5>
        <SiPython className="icons" size= '3em'/>
        <h5>Python</h5>
        <SiPostgresql className="icons" size= '3em'/>
        <h5>Postgresql</h5>
        <SiSequelize className="icons" size= '3em'/>
        <h5>Sequelize</h5>
        <SiHeroku className="icons" size= '3em'/>
        <h5>Heroku</h5>
        <SiGithub className="icons" size= '3em'/>
        <h5>Gtihub</h5>
        </div>
        </div>
    )
}