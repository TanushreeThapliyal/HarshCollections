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

const Naths = () => {



const[NathsData,setNathsData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"naths"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setNathsData(newData);                
          console.log(NathsData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (
    <Helmet title='Naths'>

<div className='breadcumb_area'>
  <div className='heading'>
    <h2> Naths</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {NathsData?.map(NathsData=>(
                   <div className='product-card' key={NathsData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${NathsData.id}`}><motion.img whileHover={{scale: 0.9}} src={NathsData.img} alt='' /></Link>
                          </div>        
  
                          <div className='product-name'>
                                <p> {NathsData.name}</p>
  
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
  
  export default Naths;
  
