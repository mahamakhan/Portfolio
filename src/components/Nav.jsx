import React from "react";
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return(
        <div>
        <h1>Nav</h1>
        <div>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
        </div>

    )
}