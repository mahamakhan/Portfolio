import React from "react";
import project1 from '../media/project1.webm'
import project2 from '../media/project2.webm'
import project3 from '../media/project3.webm'
import project4 from '../media/project4.webm'

export default function Project(){
    return(
        <div>
        <h1>Projects</h1>
         <video autoPlay width="250">
            <source src={project1}/>
        </video>
        <video autoPlay width="250">
            <source src={project2}/>
        </video> 
        <video autoPlay width="250">
            <source src={project3}/>
        </video> 
        <video autoPlay width="250">
            <source src={project4}/>
        </video> 
        </div>
    )
}