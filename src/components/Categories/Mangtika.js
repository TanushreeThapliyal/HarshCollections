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

const Mangtika = () => {



const[MangtikaData,setMangtikaData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"mangtikkas"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setMangtikaData(newData);                
          console.log(MangtikaData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='Mangtika'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> Mangtika</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {MangtikaData?.map(MangtikaData=>(
                   <div className='product-card' key={MangtikaData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${MangtikaData.id}`}><motion.img whileHover={{scale: 0.9}} src={MangtikaData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                                <p> {MangtikaData.name}</p>
  
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
  
  export default Mangtika;
  
