import React from 'react'
import '../component/Footer.css'

function Footer() {
  return (
    <>
<footer className="page-footer font-small black pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-4 mt-md-0 mt-3">
        <h5 className="text-uppercase">India's no 1 Job Site</h5>
        <p>Download our App from App Store and PlayStore</p>

      </div>

 
      <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">Useful links</h5>

        <ul className="list-unstyled">
          <li>
            <label>About us</label>
          </li>
          <li>
            <label>Careers</label>
          </li>
          <li>
            <label>Employer home</label>
          </li>
          <li>
            <label>Sitemap</label>
          </li>
        </ul>

      </div>

      <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">Contact Us</h5>

        <ul className="list-unstyled">
          <li>
            <label>Banglore,India- 100545</label>
          </li>
          <li>
            <label>+91 6566 666 66</label>
          </li>
          <li>
            <label>searchjobreal@gmail.com</label>
          </li>
        
        </ul>

      </div>
 
 

 
      <div className="col-md-2 mb-md-0 mb-3">

        <h5 className="text-uppercase">More Links</h5>

        <ul className="list-unstyled">
          <li>
            <label>Privacy policy</label>
          </li>
          <li>
            <label>Terms & conditions</label>
          </li>
          <li>
            <label>Fraud alert</label>
          </li>
          <li>
            <label>Trust & safety</label>
          </li>
        </ul>

      </div>
    

    </div>
  

  </div>
 
  <div className="footer-copyright text-center py-3">© 2023 Copyright:
    <label>SearchJob.com</label>
  </div>
  

</footer>

    </>
  )
}

export default Footer