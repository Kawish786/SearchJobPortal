import React, { useState } from 'react'
import Header from '../component/Header'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'


function Form1() {
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    number: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const [errorMessage, setErrorMessage] = useState('');
  const navigation=useNavigate()
  const handleClick=()=>{
    const { name, email, number } = inputValues;
    if (name && email && number)
    {
      
      navigation('/form2')
    }
    else{
      setErrorMessage('Please fill all the input fields')
    }
    
  }
  return (
    <>
    <div style={{backgroundColor:'#1e2520'}}>
    <Header/>
    <div className='content'>
        <div className='first'>
            <h2>Start Your Journey Here:</h2>
            <p>Your Dream Job is Waiting</p>
            <table>
                <tr>
                <th><label htmlFor='name'>Name <span style={{color:'red'}}>*</span></label></th>
                <td><input id='name' name='name' type={"text"} placeholder={"Enter your full name"} onChange={handleInputChange} value={inputValues.name} /></td>
                </tr>
                <tr>
                <th><label htmlFor='email'>Email <span style={{color:'red'}}>*</span></label></th>
                <td><input id='email' name='email' type={"text"} placeholder={"Enter your email"} onChange={handleInputChange} value={inputValues.email} /></td>
                </tr>
                <tr>
                <th><label htmlFor='number'>Mobile no <span style={{color:'red'}}>*</span></label></th>
                <td><input id='number' name='number' type={"number"} placeholder={"Enter your number"} onChange={handleInputChange} value={inputValues.number} /></td>
                </tr>
            </table>
            {errorMessage && <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>}
            <div className='button'>
                <button type="button" className="btn btn-outline-danger disabled">Previous</button>
                <button type="submit" className="btn btn-outline-success" onClick={handleClick}>Next</button>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Form1