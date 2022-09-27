import React from "react";
import resume from '../media/MahamAlmizanKhanResume.pdf'
import {VscFilePdf} from 'react-icons/vsc'
import {TiDocumentText} from 'react-icons/ti'
export default function Resume(){
    return(
        <div>
        <h1>Resume</h1>
        <div className="resumepage">
        <h2>Download:</h2><a href={resume} download="Maham Khan Resume"><VscFilePdf className="icons" size="4em" color="lightgrey"/></a>

        <h2>Open:</h2><a href="https://docs.google.com/document/d/1f6dTm1sdvKy0NqQbcGSsP5WNWAJzaMKHvzFglJM4nDw/edit?usp=sharing"><TiDocumentText className="icons" size="4em" color="lightgrey"/></a>
        </div>
        </div>
    )
}