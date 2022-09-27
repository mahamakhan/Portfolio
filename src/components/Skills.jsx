import React from "react";
import {SiExpress, SiDjango,SiHtml5,SiTailwindcss,SiCss3,SiReact,SiNodedotjs,SiMongodb,SiPython,SiPostgresql,SiSequelize,SiHeroku,SiGithub} from 'react-icons/si'
import {RiVuejsFill} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'
export default function Skills(){
    return(
        <div className="skillspage">
            <h1>Skills</h1>
        
        <div className="skills">
            <div>
        <RiVuejsFill className="icons" size= '3em'/>
        <h3>VueJs</h3>
        </div>
        <div>
        <SiDjango className="icons" size= '3em'/>
        <h3>Django</h3>
        </div>
        <div>
        <SiHtml5 className="icons" size= '3em'/>
        <h3>HTML</h3>
        </div>
        <div>
        <SiTailwindcss className="icons" size= '3em'/>
        <h3>Tailwind</h3>
        </div>
        <div>
        <SiCss3 className="icons" size= '3em'/>
        <h3>CSS</h3>
        </div>
        <div>
        <SiReact className="icons" size= '3em'/>
        <h3>React</h3>
        </div>
        <div>
        <TbBrandJavascript className="icons" size= '3em'/>
        <h3>Javascript</h3>
        </div>
        <div>
        <SiNodedotjs className="icons" size= '3em'/>
        <h3>Node.js</h3>
        </div>
        <div>
        <SiExpress className="icons" size= '3em'/>
        <h3>Express</h3>
        </div>
        <div>
        <SiMongodb className="icons" size= '3em'/>
        <h3>MongoDb</h3>
        </div>
        <div>
        <SiPython className="icons" size= '3em'/>
        <h3>Python</h3>
        </div>
        <div>
        <SiPostgresql className="icons" size= '3em'/>
        <h3>Postgresql</h3>
        </div>
        <div>
        <SiSequelize className="icons" size= '3em'/>
        <h3>Sequelize</h3>
        </div>
        <div>
        <SiHeroku className="icons" size= '3em'/>
        <h3>Heroku</h3>
        </div>
        <div>
        <SiGithub className="icons" size= '3em'/>
        <h3>Gtihub</h3>
        </div>
        </div>
        </div>
    )
}