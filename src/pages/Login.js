import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const[login,setLogin]=useState([]);
    const Navigate=useNavigate();
    const handleClick=async(e)=>{
        e.preventDefault();
        setLogin({email:"",password:""});
        let response=await fetch('http://localhost:5000/api/users/login',{
            method:'POST',
headers:{
    'Content-Type':'application/json',
    'Accept': 'application/json',
},
body:JSON.stringify({email:login.email,password:login.password})
        })
        let json=await response.json();
        console.log(json.success);
        if(json.success){
            localStorage.setItem('token',json.token);
            localStorage.setItem('userid',json.userid);
         
            Navigate('/');
            props.showAlerts("successfully You are loggedin ","success");
            console.log('u r logged in ');
          }
              else {
            props.showAlerts(" Please enter right credentials ","danger");
            console.log('not logged in')
               
                
              }
    }
    const onchange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
  return (
   <>
   <div className="login wrapper col-12 py-5">
<div className=" row row-login">
    <div className="col-12">
        <div className="auth-card">
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleClick}className='d-flex flex-column gap-30'>
<div>
    <input name="email" type="email"placeholder='enter an email'value={login.email} onChange={onchange} className='form-control' />
</div>
<div>
    <input name="password"type="password"placeholder='enter a password'value={login.password} onChange={onchange} className='form-control ' />
</div>
<div>
    <div className="d-flex justify-content-center align-items-center gap-15">
        <button className='button my-2'>Login</button>
        <Link to='/signup' className="button">SignUp</Link>
    </div>
</div>
            </form>
        </div>
    </div>
</div>


   </div>
   
   </>
  )
}
