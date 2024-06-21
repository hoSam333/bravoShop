import React, { useState } from 'react'
import img from "../../assets/images/product-5-DGM0St3L.jpg"
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function DummyDetails() {

    let {id} = useParams()
    console.log( id );

    let url = `https://dummyjson.com/products/${id}`
    const [details , setDetails ] = useState({})

   async function getDummyDetails(){
        let {data} = await axios.get(url)
        console.log(data);
        setDetails(data)
    }
    getDummyDetails()

    console.log( details )

  return (

    <div className='container p-5'>
      

            <div className="row">


                <div className="col-lg-4 col-sm-12">
                    <div className='p-5 pro_img'>
                        <img className='w-100' src={details.thumbnail} style={{height:"300px"}} alt="" />
                    </div>
                </div>

                <div className='col-lg-8 col-sm-12'>
                    <div className='p-3 d-flex flex-column gap-3 pro_details'>
                        <b className='fs-3 text-center'>({details.category})</b>
                        <h4 className='h2 fs-4'>Product Name : <span className='text-decoration-underline'>{details.title}</span> </h4>
                        <div>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className='text-muted fs-5 lh-sm'>{details.description}</p>
                        <h5 className='h5 fs-2'>Price : ${details.price} </h5>
                        <button className=' btn btn-primary d-flex align-items-center justify-content-center gap-2'>
                            <i className="fa-solid fa-cart-plus"></i>
                            <span> Add To Cart  </span>
                        </button>
                    </div>
                </div>

            </div>


    </div>
  )
}
