import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import ProductDetails from '../../pages/ProductDetails';
import {
  collection,
  query,
  onSnapshot, getDocs, addDoc
} from "firebase/firestore";
import Helmet from '../Helmet/Helmet';
import { db } from '../../firebase.config';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Shop from '../../pages/Shop';




import Toast from 'react-bootstrap/Toast'

const Bangles = () => {



  const [productsData, setProductsData] = useState([]);

  const fetchPost = async () => {

    await getDocs(collection(db, "bangles"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductsData(newData);
        console.log(productsData, newData);
      })

  }



  useEffect(() => {
    fetchPost();
  }, [])


  // const[bridalsData,setBridalsData]=useState([]);

  // const fetchPost = async () => {

  //   await getDocs(collection(db, "bridals"))
  //       .then((querySnapshot)=>{               
  //           const newData = querySnapshot.docs
  //               .map((doc) => ({...doc.data(), id:doc.id }));
  //           setBridalsData(newData);                
  //           console.log(bridalsData, newData);
  //       })

  // }




  return (
    <Helmet title='Bangles'>

      <div className='breadcumb_area'>
        <div className='heading'>
          <h2> Bangles</h2>
        </div>
      </div>

      <div className='Products_display'>
        <div className='container'>
          <div className='row row-cols-3'>
            {productsData?.map(productData => (
              <div className='product-card' key={productData.id}>

                <div className='product-img'>
                  {/* <img src={productData.img}/> */}
                  <Link to={`/shop/${productData.id}`}
                    state={{ productinfo: productData }}>
                    <motion.img whileHover={{ scale: 0.9 }} src={productData.img} alt='' /></Link>


                </div>

                <div className='product-name'>
                  <p> {productData.name} </p>
                </div>





              </div>

            ))
            }
          </div>
        </div>
      </div>

    </Helmet>
  )
}

export default Bangles;
