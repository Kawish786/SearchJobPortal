import React, {useState} from 'react'
import Header from '../component/Header'
import '../Forms/Form1.css'
import { useNavigate } from 'react-router-dom'

function Form3() {
    const [inputValues, setInputValues] = useState({
        city: '',
        state: '',
        pin: '',
        grade:'',
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
      };
    const [errorMessage, setErrorMessage] = useState('');  
    const navigation=useNavigate()
    const handlePre=()=>{
        navigation('/form2')
    }
    const handleSubmit=()=>{
        const { city, state, pin,grade } = inputValues;
        if (city && state && pin && grade)
        {
            alert('Details Registered')
            navigation('/')
            
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
                <th><label htmlFor='city'>City <span style={{color:'red'}}>*</span></label></th>
                <td><input id='city' name='city' type={"text"} placeholder={'city'} onChange={handleInputChange} value={inputValues.city} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='state'>State <span style={{color:'red'}}>*</span></label></th>
                    <td><select id='state' name='state' onChange={handleInputChange} value={inputValues.state} required>
                    <option value=""></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='pin'>PinCode <span style={{color:'red'}}>*</span></label></th>
                    <td><input id='pin' name='pin' type={"number"} placeholder={'pin'} onChange={handleInputChange} value={inputValues.pin} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='grade'>Graduation <span style={{color:'red'}}>*</span></label></th>
                    <td><input id='grade' name='grade' type={"text"} placeholder={'Degree Name'} onChange={handleInputChange} value={inputValues.grade} required/></td>
                </tr>
            </table>
            {errorMessage && <p style={{color:'red',textAlign:'center'}}>{errorMessage}</p>}
            <div className='button'>
                <button type="button" class="btn btn-outline-danger" onClick={handlePre}>Previous</button>
                <button type="submit" class="btn btn-outline-primary" onClick={handleSubmit}>Submit</button>
            </div>

        </div>
    </div>
    </div>
    </>
  )
}

export default Form3