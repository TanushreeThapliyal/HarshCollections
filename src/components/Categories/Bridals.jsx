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
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {bridalsData?.map(bridalsData=>(
                   <div className='product-card' key={bridalsData.id}>
  
                          <div className='product-img'>
                                  <img src={bridalsData.img}/>
                          </div>        
  
                                  <div className='product-name'>
  
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
  
