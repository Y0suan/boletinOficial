'use client'
import { useState, useEffect } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';

const PDFViewer = ({ pdfUrl }) => {
  const [pdfDoc, setPdfDoc] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjs.getDocument(pdfUrl);
      const pdfDocument = await loadingTask.promise;
      setPdfDoc(pdfDocument);
    };

    loadPdf();
  }, [pdfUrl]);

  if (!pdfDoc) {
    return <div>Loading PDF...</div>;
  }

  // Renderización del PDF
  return (
    <div>
      {Array.from(new Array(pdfDoc.numPages), (el, index) => (
        <div key={index}>
          <canvas id={`page-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PDFViewer;
