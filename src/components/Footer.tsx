import { AnchorHTMLAttributes } from 'react';
import { TabContainer, Row, Col, Image } from 'react-bootstrap';



const Footer = () => {
  return (
    <div className="mt-4 mb-4">
      <TabContainer>
        <Row>
          <Col xs={6} md={4}>
            <h5>Contact me:</h5>
            <ul className="list-unstyled">
              <li>Email: marckgv@gmail.com</li>
              <li>WhatsApp: 8953-35-55</li>
              <li>Teléfono: 8674-83-96</li>
            </ul>
          </Col>
          <Col xs={6} md={4}>
            <h5>Social media:</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/marlon-guti%C3%A9rrez-v-54481a225/" target="_blank" rel="noopener noreferrer">
                <Image src="linkedin-icon.png" width="30" height="30" alt="LinkedIn logo" />

                LinkedIn
                </a>

              </li>
              <li>
                <a href="https://twitter.com/marlon-gutiérrez-v">
                  <Image
                    src="/twitter-icon.png"
                    width="30"
                    height="30"
                    alt="Twitter logo"
                  />
                  Twitter
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
};
export default Footer;
