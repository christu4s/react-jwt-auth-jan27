import { useEffect } from "react";
import { useNavigate } from "react-router";



const Logout =()=>{
   const reset =()=> {
    localStorage.setItem('token', '')
   }

   const navigate  = useNavigate();
   
   useEffect(()=>{
    let tokenNew  = localStorage.getItem('token');
    if(tokenNew) {
        localStorage.setItem('token', '');
        window.location.href = '/login'
    } else {
        window.location.href = '/'
    }
   },[]);
    return '';
}

export default Logout;