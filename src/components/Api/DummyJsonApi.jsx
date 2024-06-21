import React, { useEffect } from 'react'
import "./Api.css"
import { Link } from 'react-router-dom';
function DummyJsonApi({dummyProducts , getDummyProducts , SetItemsInCart}) {



  useEffect(()=>{
    getDummyProducts()
  } , [])

  return (
    <div className='api container p-5 text-center'>
      
        <h4 className='h1 fw-bold'> Dummy Products </h4>
        <p className='my-4 text-center w-75 fs-5 m-auto fw-bold opacity-50 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident corporis hic esse porro accusantium ullam. Consectetur id mollitia ipsa tenetur sequi exercitationem facere rem itaque error! Velit!</p>
    
        <div className="row g-3">

          {dummyProducts.map((val , key )=>{
            return (

                <div className="col-lg-3 col-md-6 col-sm-12" key={key}>
                  <div className='one p-3 d-flex flex-column gap-3 rounded-4'>
                    <Link to={`products/${val.id}`}>
                      <img className='w-50' src={val.thumbnail} style={{height:"150px"}} alt="" />
                    </Link>
                    <b className='text-muted fs-5'> {val.title.slice(0,7)} </b>
                    <div className='proces d-flex align-items-center justify-content-between'>
                        <i className="fa-solid fa-heart"></i>
                        <i onClick={ ()=>{SetItemsInCart (val) } } className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>

            )
          })  }
          

        </div>

    </div>
  )
}

export default DummyJsonApi
