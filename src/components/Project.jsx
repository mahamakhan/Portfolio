import React from "react";
import project1 from '../media/project1.webm'
import project2 from '../media/project2.webm'
import project3 from '../media/project3.webm'
import project4 from '../media/project4.webm'
import {SiExpress, SiDjango,SiHtml5,SiTailwindcss,SiCss3,SiReact,SiNodedotjs,SiMongodb,SiPython,SiPostgresql,SiSequelize, SiGithub} from 'react-icons/si'
import {RiVuejsFill} from 'react-icons/ri'
import {TbBrandJavascript} from 'react-icons/tb'

export default function Project(){
    return(
        <div className="projectpage">
        <h1>Projects</h1>
        <div className="projects">
        <div className="projcard">
         <video autoPlay width="300" height="300">
            <source src={project1}/>
        </video>
        <figcaption className="show">
        <h2>Memory Game</h2>
        <h4>Memory game which includes creating matched pairs.</h4>
        <SiCss3/>
        <SiHtml5/>
        <TbBrandJavascript/>
        <a href="https://github.com/mahamakhan/Memory-Game"><SiGithub className="github" color={"grey"}/></a>
        
        </figcaption>
        </div>
        <div className="projcard">
        <video autoPlay width="300" height="300">
            <source src={project2}/>
        </video> 
        <figcaption className="show">
        <h2>Travel Itinerary</h2>
        <h4>A travel app to log your destinations and update them. There is also an option to make a wish list.</h4>
        <SiNodedotjs/>
        <SiExpress/>
        <SiMongodb/>
        <SiReact/>
        <a href="https://github.com/mahamakhan/Travel-Itinerary"><SiGithub className="github" color={"grey"}/></a>
        
        </figcaption>
        </div>
        <div className="projcard">
        <video autoPlay width="300" height="300">
            <source src={project3}/>
        </video> 
        <figcaption className="show">
        <h2>Group Finder</h2>
        <h4>An app allowing the user to sign up, create groups, and join already created groups to play games online.</h4>
        <SiNodedotjs/>
        <SiExpress/>
        <SiPostgresql/>
        <SiSequelize/>
        <SiReact/>
        <a href="https://github.com/mahamakhan/Group-Finder-API"><SiGithub className="github" color={"grey"}/></a>
        <a href="https://github.com/Skim1571/Group-Finder"><SiGithub className="github" color={"grey"}/></a>
        </figcaption>
        </div>
        <div className="projcard">
        <video autoPlay width="300" height="300">
            <source src={project4}/>
        </video> 
        <figcaption className="show">
        <h2>NGOs-Give Charity</h2>
        <h4>An app with details of different NGOs and locations to donate items added using an API.</h4>
        <SiPython/>
        <SiDjango/>
        <RiVuejsFill/>
        <SiTailwindcss/>
        <a href="https://github.com/mahamakhan/NGO"><SiGithub className="github" color={"grey"}/></a>
        </figcaption>
        </div>
        </div>
        </div>
    )
}