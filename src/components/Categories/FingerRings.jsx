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

const FingerRings = () => {



const[FingerRingsData,setFingerRingsData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"fingerRings"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setFingerRingsData(newData);                
          console.log(FingerRingsData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='FingerRings'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> FingerRings</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {FingerRingsData?.map(FingerRingsData=>(
                   <div className='product-card' key={FingerRingsData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${FingerRingsData.id}`}><motion.img whileHover={{scale: 0.9}} src={FingerRingsData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                                <p> {FingerRingsData.name}</p>
  
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
  
  export default FingerRings;
  
