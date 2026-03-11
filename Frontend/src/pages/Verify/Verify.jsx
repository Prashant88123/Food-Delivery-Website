import React from 'react'
import './Verify.css'
import { useContext } from 'react';
import axios from "axios"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import { useEffect } from 'react';

const Verify = () => {

    const [searchParems,setSearchParams]=useSearchParams();
    const success=searchParems.get("success");
    const orderId=searchParems.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();

    const verifyPayments=async()=>{
        const response=await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }
    useEffect(()=>{
        verifyPayments();
    },[])
  return (
    <div className='verify'>
      <div className="spinner"></div>
    </div>
  )
}

export default Verify
