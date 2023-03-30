import React from 'react'
import '../Pages/Page.css'

function Management() {
  return (
    <>
    <div className="left_img_content bg-success">
            <h2 className="section_content_h2">Online Assessment</h2>
            <p className="section_content_p">Assessing fresher talent was never this convenient. Recruit quality<br/>candidates within less time and cost using our Online Assessment Engine.</p>
            <div className="section_img_buttons" style={{display:'flex',justifyContent:'center'}}>
              <button className="btn btn-secondary left_button" id="online-assess-btn">Get Details</button>
              <button className="btn btn-primary pricing_button">Pricing</button>
            </div>
        </div>
        <h1 className='text-primary'>Premium Jobs</h1>
        <div className='cards'>
            <div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
                <div class="card-header bg-dark text-success">IIT</div>
                <div class="card-body">
                    <h5 class="card-title">Deputy Project Manager</h5>
                    <p class="card-text text-primary">Experience:2 year</p>
                    <p class="card-text text-primary">City:Banglore</p>
                    <p class="card-text text-primary">Salary:3LPA</p>
                    <p class="card-text text-danger">Urgent Hiring</p>
                </div>
            </div>
            <div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
                <div class="card-header bg-dark text-success">Infosys</div>
                <div class="card-body">
                    <h5 class="card-title">Junior Project Manager</h5>
                    <p class="card-text text-primary">Experience:3 year</p>
                    <p class="card-text text-primary">City:Mumbai</p>
                    <p class="card-text text-primary">Salary:4LPA</p>
                    <p class="card-text text-danger">Urgent Hiring</p>
                </div>
            </div>
            <div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
                <div class="card-header bg-dark text-success">Jubilant Consulting</div>
                <div class="card-body">
                    <h5 class="card-title">Digital Marketing Manager </h5>
                    <p class="card-text text-primary">Experience:3 year</p>
                    <p class="card-text text-primary">City:Kanpur</p>
                    <p class="card-text text-primary">Salary:6LPA</p>
                    <p class="card-text text-danger">Urgent Hiring</p>
                </div>
            </div>
            <div class="card bg-light mb-3" style={{maxWidth:'18rem'}}>
                <div class="card-header bg-dark text-success">Satrix Technologies</div>
                <div class="card-body">
                    <h5 class="card-title">Senior Account Manager</h5>
                    <p class="card-text text-primary">Experience:6 year</p>
                    <p class="card-text text-primary">City:Banglore</p>
                    <p class="card-text text-primary">Salary:8LPA</p>
                    <p class="card-text text-danger">Urgent Hiring</p>
                </div>
            </div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-outline-success">Veiw All Jobs</button>
        </div>
    </>

  )
}

export default Management