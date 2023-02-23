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

const Earrings = () => {



const[EarringsData,setEarringsData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"earrings"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setEarringsData(newData);                
          console.log(EarringsData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='Earrings'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> Earrings</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {EarringsData?.map(EarringsData=>(
                   <div className='product-card' key={EarringsData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${EarringsData.id}`}><motion.img whileHover={{scale: 0.9}} src={EarringsData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                                <p> {EarringsData.name}</p>
  
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
  
  export default Earrings;
  
