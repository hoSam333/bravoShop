import React from 'react'
import imgAbout from "../../assets/images/about.jpg"
import "./About.css"
import { Link  } from "react-router-dom"


function About() {
  return (
    <div className='About container p-5'>
      
      <h3 className='h1 my-5 text-center fs-1 fw-bold'>About <span>Us</span></h3>

      <div className="row g-4">

        <div className="col-lg-5 col-sm-12">
          <div>
              <img className='w-100' src={imgAbout} alt="" />
          </div>
        </div>

        <div className="col-lg-7 col-sm-12">
          <div className='d-flex flex-column gap-3'>
            <b className='fs-2'>Welcome To <span> Bravo Shop </span></b>
            <p className='fw-bold fs-5 opacity-50'><span> Bravo Shop </span>  is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente. </p>
            <Link to="shop" className='btn btn-outline-primary w-25'>Shop Now</Link>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default About
