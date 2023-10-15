import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export const Signup = (props) => {
const[login,setLogin]=useState([]);

    let Navigate=useNavigate();
    // const{showAlert}=props;
    const handleClick=async(e)=>{
   setLogin({name:"",email:"",password:"",mobile:""})
          e.preventDefault();
          let response=await fetch('http://localhost:5000/api/users/signup',{
            method:'POST',
            headers:{
              //  'authtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmVlbWEiLCJpYXQiOjE2OTU0OTAwMzN9.w73_eMPMR4bdcrKtG6SzHfefe3IP6egDZRvxLKOoCb0',
                'Content-Type':'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify({name:login.name,email:login.email,password:login.password,mobile:login.mobile})
        })
        let json=await response.json();
        // console.log(json.success);
    if(json.success){
      
      localStorage.setItem('token',json.token);
      console.log('u r signed in');
      props.showAlerts("successfully you are signedin","success");
      Navigate('/login');
    }
        else{
          props.showAlerts("please enter right credentials","danger");
        console.log("please enter right creds")
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
            <h1 className='text-center'>Sign Up</h1>
            <form onSubmit={handleClick} className='d-flex flex-column gap-30'>
            <div>
    <input name="name" type="text"placeholder='enter your name'value={login.name} id="name"onChange={onchange}  className='form-control' />
</div>

<div>
    <input name="email" type="email"placeholder='enter an email'value={login.email} id="email"onChange={onchange}  className='form-control' />
</div>
<div>
    <input name="password"type="password"placeholder='enter a password' value={login.password} id="password"onChange={onchange}  className='form-control ' />
</div>
<div>
    <input name="mobile"type="tel"placeholder='enter your number' value={login.mobile} id="mobile" onChange={onchange}className='form-control ' />
</div>
<div className='d-flex justify-content-center '>
<button className="button">Submit</button>
</div>
            </form>
        </div>
    </div>
</div>


   </div>
  
  </>
  )
}
