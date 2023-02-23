import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import ProductDetails from '../../pages/ProductDetails';
import {
  collection,
  query,
  onSnapshot,getDocs,addDoc
} from "firebase/firestore";
import Helmet from '../Helmet/Helmet'; 
import { db } from '../../firebase.config';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Bridals = () => {



const[bridalsData,setBridalsData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"bridals"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setBridalsData(newData);                
          console.log(bridalsData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 
  
   
    
  
    return (
    <Helmet title='Bridals'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> Bridals</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {bridalsData?.map(bridalsData=>(
                   <div className='product-card' key={bridalsData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${bridalsData.id}`}><motion.img whileHover={{scale: 0.9}} src={bridalsData.img} alt='' /></Link>                          </div>        
  
                          <div className='product-name'>
                                <p> {bridalsData.name}</p>
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
  
  export default Bridals;
  
