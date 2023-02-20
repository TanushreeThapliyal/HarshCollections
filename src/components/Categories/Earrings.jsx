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
    
    <div className='Products_display'>
                              <div className='container'>
                              <div className='row row-cols-3'>
                              {EarringsData?.map(EarringsData=>(
                   <div className='product-card' key={EarringsData.id}>
  
                          <div className='product-img'>
                                  <img src={EarringsData.img}/>
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
  
  export default Earrings;
  
