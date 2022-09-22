import React from "react";
import resume from '../media/MahamAlmizanKhanResume.pdf'
import {VscFilePdf} from 'react-icons/vsc'
import {TiDocumentText} from 'react-icons/ti'
export default function Resume(){
    return(
        <div className="resumepage">
        <h1>Resume</h1>
        <a href={resume} download="Maham Khan Resume"><VscFilePdf size="4em" color="lightgrey"/></a>
        <a href="https://docs.google.com/document/d/1f6dTm1sdvKy0NqQbcGSsP5WNWAJzaMKHvzFglJM4nDw/edit?usp=sharing"><TiDocumentText size="4em" color="lightgrey"/></a>
        </div>
    )
}