import React, { Component } from 'react';
import './Register.css'
import {FaGoogle, FaFacebook, FaTwitter} from 'react-icons/fa'

class Register extends Component {
    render() {
        return (
            
               <div  style={{BackgroundImage:`url{bg}`}} >
                   <div className='sign-up-form'>
                <h1>Sign Up Now</h1>
                <form>
                    
                    <input type="email" className='input-box' name='email' placeholder='enter your email address'/> <br/>
                    
                    <input type="password" className='input-box' name='password' placeholder='enter your password'  />
                    <p><span><input type= 'checkbox'/> </span> I agree to the terms of condition </p>
                    <button className='btn-s' >Sign Up</button>
                    <hr/>
                    <p className='or'>OR</p>
                    <div className='faul'>
                    <a href='#' ><FaGoogle></FaGoogle></a>
                    <a href='#' ><FaFacebook></FaFacebook> </a>
                    <a href='#' ><FaTwitter></FaTwitter> </a>
                    </div>
                    <p>Do you have an Account ? <a href='#'>Sign in</a> </p>
                    
                </form>
            </div>
               </div>
            
        );
    }
}

export default Register;