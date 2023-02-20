import React, {useState,useEffect} from 'react';

import {Container,Row,Col} from 'reactstrap';


import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css';

import {Link} from "react-router-dom";
import {motion} from  "framer-motion";

import ControlledCarousel from "../components/UI/ControlledCarousel";


import Services from "../services/Services";
import useGetData from '../custom-hooks/useGetData';


const Home = () => {

  const {data:products,loading}=useGetData('products');

        
  const year = new Date().getFullYear();


  return (
  <Helmet title={"Home"}>
    <section className="hero__section">

    <ControlledCarousel/>
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Col lg="6" md="6" sm="12">
            <div className="hero__content">
              <p className="hero__subtitle">Trending Product in {year}</p>
              <h2>Let's Make You More Beautiful.</h2>
              <p>
                Modern design is an interior design style characterized by a
                monochromatic color palette, clean lines, minimalism, natural
                materials, and natural light. It refers specifically to a
                historical aesthetic movement that took place during the early
                to mid-twentieth century.
              </p>

              <motion.button whileTap={{scale:1.2}}
              className='buy__btn'> <Link to='/shop'>SHOP NOW</Link> </motion.button>
              </div>
              </Col>


              
              </Row>
              </Container>
              </section>
              <Services/>

              <div className="top_catagory_area clearfix">

            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <h2>Categories We Deal In</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ">
                <div className="row justify-content-center ">
                    
                <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center-bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fbridal-jewellery.png?alt=media&token=356d560f-1a8d-4527-868f-566d85defb2c)"}}>
                            <div className="catagory-content">
                               <Link to='/bridals'>Bridal Jewellery</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fmangtika-and-pasha.jpg?alt=media&token=c97b3178-9f03-46fc-8633-24eebfac187a)"}}>
                            <div className="catagory-content">
                                <Link to='/mangtikkas'>Mangtikka and Pashas</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fmangalsutra.jpg?alt=media&token=5aa580bc-922f-478e-8030-b82438c850dd)"}}>
                            <div className="catagory-content">
                                <Link to='/mangalsutras'>Mangalsutras</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Ffinger-rings.jpg?alt=media&token=2b773840-979c-4c69-a888-3c5f3f947d86)"}}>
                            <div className="catagory-content">
                                <Link to='/fingerrings'>Finger Rings</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fnaths.jpeg?alt=media&token=d0f5ac10-0e41-407d-baaf-b0d7f3ee9281)"}}>
                            <div className="catagory-content">
                                <Link to='/naths'>Naths</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fbangles.jpg?alt=media&token=fe810988-f1aa-4b37-ad96-ce0e344bc6ca)"}}>
                            <div className="catagory-content">
                                <Link to='/bangles'>Bangles</Link>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-12 col-sm-6 col-md-4 text-center" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fcustomised-jewellery-and-hair-accessories.jpg?alt=media&token=95c606bc-d399-43c4-b7f7-1d34a448f68b)"}}>
                            <div className="catagory-content">
                                <Link to='/customised'>Customised Jewellery and Hair Accessories</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fearrings.jpg?alt=media&token=b2a59122-04f7-4c94-af7e-576634df92a5)"}}>
                            <div className="catagory-content">
                                <Link to='/earrings'>Earrings</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-4" >
                        <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{backgroundImage:"URL(https://firebasestorage.googleapis.com/v0/b/harshcollection.appspot.com/o/categories%2Fnecklace.jpg?alt=media&token=c47b5782-6777-447d-b7d2-8f1c486527e9)"}}>
                            <div className="catagory-content">
                                <Link to='/necklaces'>Necklaces</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

              

              </Helmet>
              );
              };


              export default Home;