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

const Customised = () => {



const[CustomisedData,setCustomisedData]=useState([]);

const fetchPost = async () => {
     
  await getDocs(collection(db,"customised"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .map((doc) => ({...doc.data(), id:doc.id }));
          setCustomisedData(newData);                
          console.log(CustomisedData, newData);
      })
    }

      
useEffect(()=>{
    fetchPost();
}, [])
 

  
   
    
  
    return (


        
    <Helmet title='Customised'>'
    
    <div className='breadcumb_area'>
  <div className='heading'>
    <h2> Customised</h2>
  </div>
 </div>
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {CustomisedData?.map(CustomisedData=>(
                   <div className='product-card' key={CustomisedData.id}>
  
                          <div className='product-img'>
                          <Link to={`/shop/${CustomisedData.id}`}><motion.img whileHover={{scale: 0.9}} src={CustomisedData.img} alt='' /></Link>
                          </div>        
                          <div className='product-name'>
                                <p> {CustomisedData.name}</p>
  
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
  
  export default Customised;
  
