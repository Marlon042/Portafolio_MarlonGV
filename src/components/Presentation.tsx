import { Button } from 'react-bootstrap';

const Presentation = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, I'm Marlon Gutiérrez V.</h1>
      <p className="lead">
        I'm pursuing a degree in Information Systems Engineering at Universidad Nacional de Costa Rica (UNA)
        +8 years of plenty experience with computer systems.
      </p>
      <hr className="my-4" />
      <p>
        Check out my social media networks to know more about me :  
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
