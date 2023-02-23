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

const Necklaces = () => {



const[NecklacesData,setNecklacesData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"necklaces"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setNecklacesData(newData);                
          console.log(NecklacesData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='Necklaces'>


<div className='breadcumb_area'>
  <div className='heading'>
    <h2> Necklaces</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {NecklacesData?.map(NecklacesData=>(
                   <div className='product-card' key={NecklacesData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${NecklacesData.id}`}><motion.img whileHover={{scale: 0.9}} src={NecklacesData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                               <p> {NecklacesData.name}</p>
  
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
  
  export default Necklaces;
  
