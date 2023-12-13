import { Button } from 'react-bootstrap';

//Call To Action
const CTA = () => {
  return (
    <div className="jumbotron">
      <h1>Hire me!</h1>
      <p>
        I'm available for new projects & more. Let's work together to build something
        great. 
      </p>
      <p>
      *This page is currently in development*
      </p>
      <p>
        <Button variant="primary" href="#contact-me">
          Contact me
        </Button>
      </p>
    </div>
  );
};
export default CTA;