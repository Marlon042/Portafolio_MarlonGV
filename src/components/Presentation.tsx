import { Button } from 'react-bootstrap';

const Presentation = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-5">Hi 👋🏼, I'm Marlon Gutiérrez V.</h1>
      <p className="lead">
        I'm pursuing a degree in Information Systems Engineering at Universidad Nacional de Costa Rica (UNA)
        +10 years of plenty experience in tech support with computer systems.
      </p>
      <hr className="my-4" />
      <p className='lead'>
      - Experience in developing desktop & Web Apps in Java Maven with embedded servers, SQL databases and Api's.
      </p>
      <p className='lead'>
      - Creating Web pages in Next.js framework, HTML, Javascript, Tailwind CSS, Bootstrap.
      </p>
      <p className='lead'>
      - Web Deployment with Github and Vercel.
      </p>
      <hr className="my-4" />
      
      <p className='lead'>
        Also check out my social media networks to know more about me :    
        <Button
          variant="outline-primary"
          size="sm"
          className="ml-2"
          href="https://linktab.co/MarlonGV"
        >
          LinkTab.co
        </Button>
      </p>
    </div>
  );
};

export default Presentation;
