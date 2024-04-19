import React from 'react'
import Navbar from './Navbar'
import { usePdfContext } from '../context/PdfContext'
import axios from "axios";

function UploadedFiles() {
  const {allPdfs} = usePdfContext();
  
  const showPdf = async (pdfFilename) => {
    try {
      const response = await axios.get(`http://34.128.138.220/pdf/${pdfFilename}`);
      console.log(response.data)
      window.open(response.data, '_blank');
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div>
      <Navbar/>
      {allPdfs && allPdfs.map((data, index) => (
              <div className="border border-solid border-gray-700 p-4 my-4" key={index}>
                <h6 className="font-bold text-lg">Title: {data.title}</h6>
                <h6 className="text-gray-600">Filename: {data.pdf}</h6>
                <button onClick={() => showPdf(data.pdf)} className="bg-blue-600 text-white rounded-md p-2 text-center mt-2">
                  Show PDF
                </button>
              </div>
            ))}

    </div>
  )
}

export default UploadedFiles