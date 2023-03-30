import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Footer from '../component/Footer'
import Nav from '../component/Nav'
import Form1 from '../Forms/Form1'
import Form2 from '../Forms/Form2'
import Form3 from '../Forms/Form3'
import Contact from '../Pages/Contact'
import Engineer from '../Pages/Engineer'
import Management from '../Pages/Management'
import Marketing from '../Pages/Marketing'
import Sales from '../Pages/Sales'

function FormRoute() {
  return (
    <BrowserRouter>
    <>
    <div >
        <Nav/>
        <Routes>
            <Route path='/' element={<Form1/>}/>
            <Route path='/form2' element={<Form2/>}/>
            <Route path='/form3' element={<Form3/>}/>
            <Route path='/engineering' element={<Engineer/>}/>
            <Route path='/management' element={<Management/>}/>
            <Route path='/marketing' element={<Marketing/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
    </>
    </BrowserRouter>
  )
}

export default FormRoute