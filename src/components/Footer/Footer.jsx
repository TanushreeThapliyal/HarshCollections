import React from 'react';
import './footer.css';

import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';


const Footer = () => {

  const year=new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              
              <div>
                <h1 className='text-white'> Harsh Collections</h1>
              </div>

              </div>
              <p className='footer__text mt-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam tempora iusto ad saepe.
               Incidunt corrupti totam modi officia omnis, id 
               quibusdam ad reiciendis blanditiis quo obcaecati ratione itaque aut!
               </p>
            
          </Col>



          <Col lg='2'>

          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Useful Links</h4>
            <ListGroup>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="/shop">Shop</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="/cart">Cart</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to="/login">Login</Link>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0'>
              <Link to='#'>Privacy Policies</Link>
            </ListGroupItem>
            </ListGroup>
          </div>
          </Col>

          <Col lg='3'>

          <div className='footer__quick-links'>
            <h4 className='quick__links-title'>Contact</h4>
            
            <ListGroup className='footer__contact'>

            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
             <span> <i className="ri-map-pin-line"></i></span>
             <p> Lakhan Tiraha, Kannauj, Uttar Pradesh - 209725</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
              <span> <i className="ri-phone-line"></i></span>
              <p>+91 98390 67196 (9AM to 9PM)</p>
            </ListGroupItem>

            <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
             <span> <i className="ri-mail-line"></i></span>
             <p>  harshcollectionjewellery@gmail.com</p>
            </ListGroupItem>
            </ListGroup>
          </div>
          </Col>

        <Col lg='12'>
          <p className='footer__copyright'>Copyright {year} developed by Tanushree. All rights reserved.</p>
        </Col>


        </Row>
      </Container>
    </footer>
  )
}
export default Footer