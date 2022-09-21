import React from "react";
import { NavLink } from 'react-router-dom'
import { SiAboutdotme} from 'react-icons/si'
import {FaCode} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {GrDocument, GrContact} from 'react-icons/gr'

export default function Nav(){
    return(
        <div className="navbar">
        <div>
            <ul>
            <li><NavLink to='/about'><SiAboutdotme color={"grey"}/></NavLink></li>
            <li><NavLink to='/projects'><FaCode color={"grey"}/></NavLink></li>
            <li><NavLink to='/skills'><GiSkills color={"grey"}/></NavLink></li>
            <li><NavLink to='/resume'><GrDocument color="grey"/></NavLink></li>
            <li><NavLink to='/contact'><GrContact color="grey"/></NavLink></li>
            </ul>
        </div>
        </div>

    )
}