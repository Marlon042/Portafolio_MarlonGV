import { Button } from 'react-bootstrap';

// Call To Action
const CTA = () => {
  const handleDownloadCV = () => {
    // Cambia 'nombre_del_cv.pdf' por el nombre real de tu archivo PDF
    const pdfUrl = '/pdf/mi_cv.pdf';

    // Crea un elemento 'a' (enlace) invisible para la descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'mi_cv.pdf';

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace del cuerpo del documento
    document.body.removeChild(link);
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
