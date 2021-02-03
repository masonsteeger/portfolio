import React from 'react';
import { Document, Page } from 'react-pdf';
import MyResume from '../../media/resume.pdf'
import GA from '../../media/ga-cert.pdf';
import ReactCert from '../../media/react-cert.pdf'
import { pdfjs } from 'react-pdf';

import './Resume.css'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    return (
    <div>
        <h1>Resume</h1>
        <embed className="resume" style={{}} src={MyResume} width='600px' height='800px'></embed>
        <h2>Certificates</h2>
        <div className="certificates">
            <Document className="cert" file={GA} onLoadError={console.error}><Page className="vertical" height={446} pageNumber={1} /></Document>
            <Document className="cert" file={ReactCert}><Page className="horizontal" width={600} pageNumber={1} /></Document>
        </div>
    </div>
    );
};

export default Resume;