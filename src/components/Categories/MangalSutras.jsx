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

const MangalSutras = () => {



const[MangalSutrasData,setMangalSutrasData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"mangalsutras"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setMangalSutrasData(newData);                
          console.log(MangalSutrasData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='MangalSutras'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> MangalSutras</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {MangalSutrasData?.map(MangalSutrasData=>(
                   <div className='product-card' key={MangalSutrasData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${MangalSutrasData.id}`}><motion.img whileHover={{scale: 0.9}} src={MangalSutrasData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                                <p> {MangalSutrasData.name}</p>
  
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
  
  export default MangalSutras;
  
