import { Button } from 'react-bootstrap';
import { saveAs } from 'file-saver';

// Call To Action
const CTA = () => {
  const handleDownloadCV = async () => {
    try {
      const pdfUrl = 'mi_cv.pdf';
  
      // Descarga el archivo y lo guarda localmente
      const response = await fetch(pdfUrl);
  
      if (!response.ok) {
        throw new Error(`Error al descargar el CV: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      saveAs(blob, 'Resume_Marlon_GV.pdf');
    } catch (error) {
      console.error('Error al descargar el CV:', error);
    }
  };
  




  return (
    <div className="jumbotron">
      <h1>Hire me!</h1>
      <p>
        I'm available for new projects & more. Let's work together to build something great.
      </p>
      <p>
        *This page is currently in development by myself*
      </p>
      <p>
        <Button variant="primary" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </p>
    </div>
  );
};

export default CTA;
