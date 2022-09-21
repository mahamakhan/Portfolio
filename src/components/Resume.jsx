import React from "react";
import resume from '../media/MahamAlmizanKhanResume.pdf'
import {GrDocumentPdf} from 'react-icons/gr'
export default function Resume(){
    return(
        <div>
        <h1>Resume</h1>
        <a href={resume} download="Maham Khan Resume"><GrDocumentPdf size="3em" color="grey"/></a>
        </div>
    )
}