import React, { useState } from 'react'
import '../Pages/Contact.css'
import { useNavigate } from 'react-router-dom';

function Contact() {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        message: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    const [errorMessage, setErrorMessage] = useState('');
    const navigation=useNavigate()
    const handleSubmit=()=>{
        const { name, email, message } = inputValues;
            if (name && email && message)
       {
      
            alert('Feedback Submitted')
            navigation('/')
      }
      else{
           setErrorMessage('Please fill all the input fields')
     }
    }
  return (
    <>
    <div className='bg-light'>
        
        <div className="form-group bg-dark ">
        <h3 className='text-primary'>Get In Touch</h3>
            <label htmlFor="name">Name<span style={{color:'red'}}>*</span></label>
            <input  type="text" className="form-control"  name='name' id="name"  onChange={handleInputChange} value={inputValues.name} placeholder="Enter Name"/>
        
       
            <label htmlFor="email" >Email address<span style={{color:'red'}}>*</span></label>
            <input  type="email" className="form-control "  name='email' id="email"  onChange={handleInputChange} value={inputValues.email} placeholder="Enter Email"/>
        
       
            <label htmlFor="message">Message<span style={{color:'red'}}>*</span></label>
            <textarea  name='message' id='message' className="form-control " onChange={handleInputChange} value={inputValues.message} placeholder='Message' />
            <br/>  {errorMessage && <p style={{color:'white',textAlign:'center'}}>{errorMessage}</p>}
            <div className="text-center">
                <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
  
    </div>
    </>
  )
}

export default Contact;