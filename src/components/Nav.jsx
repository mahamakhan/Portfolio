import React from "react";
// import { Link } from 'react-router-dom'
import { SiAboutdotme} from 'react-icons/si'
import {FaCode} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {MdContactPhone} from 'react-icons/md'
import { Link } from "react-scroll";

export default function Nav(){
    return(
        <div className="navbar">
        <div>
            <ul >
            <li className="nav"><Link to='aboutpage' spy={true} smooth={true} offset={-150} duration={500}><SiAboutdotme color={"grey"}/></Link></li>
            <li className="nav"><Link to='projectpage' spy={true} smooth={true} offset={-60} duration={500}><FaCode color={"grey"}/></Link></li>
            <li className="nav"><Link to='skillspage' spy={true} smooth={true} offset={-100} duration={500}><GiSkills color={"grey"}/></Link></li>
            <li className="nav"><Link to='resumepage' spy={true} smooth={true} offset={-100} duration={500}><HiOutlineDocumentText color="grey"/></Link></li>
            <li className="nav"><Link to='contactpage' spy={true} smooth={true} offset={-100} duration={500}><MdContactPhone color="grey"/></Link></li>
            </ul>
        </div>
        </div>

    )
}