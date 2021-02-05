import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import MyResume from '../../media/resume.pdf'
import GenAss from '../../media/ga-cert.pdf';
import ReactCert from '../../media/react-cert.pdf'
import Modal from '../../components/Modal/Modal'
import { pdfjs } from 'react-pdf';

import './Resume.css'


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = (props) => {
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

    console.log(window.innerWidth)

    if(window.innerWidth > 768){
        return (
            <div className='resume-container'>
                <h1 style={{fontSize: "66px", marginTop: "0"}}>RESUME</h1>
                <div className="resume" >
                    <iframe src={`${MyResume}`} title='Resume' width="690px" height="940px"></iframe>
                </div>
                <h2>CERTIFICATES</h2>
                <div className="certificates">
                    <Document onClick={() => openModal(GenAss, null, 800)} className="cert" file={GenAss}><Page height={446} pageNumber={1} /></Document>
                    <Document onClick={() => openModal(ReactCert, 800, null)} className="cert" file={ReactCert}><Page width={600} pageNumber={1} /></Document>
                </div>
                <Modal clicked={() => closeModal()} display={modalDisplay}><Document className="modal" file={cert.file}><Page width={cert.width} height={cert.height} pageNumber={1} /></Document></Modal>
            </div>
            );
    }else{
        return (
            <div className='resume-container'>
                <h1 style={{fontSize: "66px", marginTop: "0"}}>RESUME</h1>
                <div >
                    <Document file={MyResume} ><Page width={320} pageNumber={1}/></Document>
                </div>
                <h2>CERTIFICATES</h2>
                <div className="certificates">
                    <Document className="cert" file={GenAss}><Page width={320} pageNumber={1} /></Document>
                    <Document className="cert" file={ReactCert}><Page width={320} pageNumber={1} /></Document>
                </div>
            </div>
            );
    }
};

export default Resume;