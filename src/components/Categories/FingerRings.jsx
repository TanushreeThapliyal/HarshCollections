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
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {FingerRingsData?.map(FingerRingsData=>(
                   <div className='product-card' key={FingerRingsData.id}>
  
                          <div className='product-img'>
                                  <img src={FingerRingsData.img}/>
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
  
  export default FingerRings;
  
