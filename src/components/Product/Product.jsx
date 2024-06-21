import React from 'react'
import "./Product.css"
import img_1 from "../../assets/images/product-1-Eqx8spQ9.jpg"
import productsDate from './Products';

function Product({SetItemsInCart , setItemsInFavorite}) {

  
  return (
    <div className='Product p-5 container'>
      
      <h2 className='h2 text-center my-5 fs-1 fw-bold '>PRODUCTS</h2>
        
      <div className="row g-2 ">

{productsDate.map((val , key)=>{
  return(

          <div className="col-lg-3 col-md-6 col-sm-12" key={key}>

            <div className='one'>
              <div className='w-100 p-5'>
                <img src={val.img} className='w-100 ' style={{height:"200px"}} alt="" />
              </div>
              <div className='p-2 text-center mt-3 fw-bold d-flex flex-column gap-3'>
                  <b className='fs-3'>{val.title}</b>
                  <p className='fs-5 '>${val.price} <del className='text-muted ms-3'>${val.sale}</del> </p>
                  <div>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                  </div>
                  <div className='proces d-flex align-items-center justify-content-between'>
                      <i onClick={ ()=>{  setItemsInFavorite(val) } } className="fa-solid fa-heart"></i>
                      <i onClick={ ()=>{  SetItemsInCart(val) } } className="fa-solid fa-cart-shopping"></i>
                  </div>
              </div>
            </div>

          </div>
  )
})}

      </div>

    </div>
  )
}

export default Product
