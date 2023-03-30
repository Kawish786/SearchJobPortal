import React, { useState } from 'react'
import Header from '../component/Header'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'

function Form2() {
    const [inputValues, setInputValues] = useState({
        date: '',
        address: '',
        experience: '',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    const [errorMessage, setErrorMessage] = useState('');
    const navigation=useNavigate()
    const handlePrevious=()=>{
        navigation('/')
    }
    const handleNext=()=>{
        const { date, address, experience } = inputValues;
        if (date && address && experience)
        {
            navigation('/form3')
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
                <th><label htmlFor='date'>Date of Birth <span style={{color:'red'}}>*</span></label></th>
                <td><input id='date' name='date' type={"date"} onChange={handleInputChange} value={inputValues.date} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='address'>Address <span style={{color:'red'}}>*</span></label></th>
                    <td><textarea id='address' name='address' style={{resize:'none'}} placeholder={'Enter your address'} onChange={handleInputChange} value={inputValues.address} required/></td>
                </tr>
                <tr>
                <th><label htmlFor='experience'>Experience<span style={{color:'red'}}>*</span></label></th>
                <td><input id='experience' name='experience' type={"text"} placeholder={"Experience Level"} onChange={handleInputChange} value={inputValues.experience} required/></td>
                </tr>
            </table>
            {errorMessage && <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>}
            <div className='button'>
                <button type="button" class="btn btn-outline-danger" onClick={handlePrevious}>Previous</button>
                <button type="submit" class="btn btn-outline-success" onClick={handleNext}>Next</button>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Form2