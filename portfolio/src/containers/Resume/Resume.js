import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import MyResume from '../../media/resume.pdf'
import GA from '../../media/ga-cert.pdf';
import ReactCert from '../../media/react-cert.pdf'
import Modal from '../../components/Modal/Modal'
import { pdfjs } from 'react-pdf';

import './Resume.css'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    const [modalDisplay, setModalDisplay] = useState({display: 'none'})
    const [cert, setCert] = useState({});
    

    const openModal = (certFile, width, height) => {
        setCert({
            file: certFile,
            width: width ,
            height: height
        })
        setModalDisplay(null)
    }

    const closeModal = () => {
        setModalDisplay({display: 'none'})
    }


    return (
    <div className='resume-container'>
        <h1>Resume</h1>
        <embed className="resume" style={{}} src={MyResume} width='600px' height='800px'></embed>
        <h2>Certificates</h2>
        <div className="certificates">
            <Document onClick={() => openModal(GA, null, 800)} className="cert" file={GA}><Page height={446} pageNumber={1} /></Document>
            <Document onClick={() => openModal(ReactCert, 800, null)} className="cert" file={ReactCert}><Page width={600} pageNumber={1} /></Document>
        </div>
        <Modal clicked={() => closeModal()} display={modalDisplay}><Document className="modal" file={cert.file}><Page width={cert.width} height={cert.height} pageNumber={1} /></Document></Modal>
    </div>
    );
};

export default Resume;