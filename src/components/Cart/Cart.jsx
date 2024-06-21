import React from 'react'
import "./Cart.css"
import img from "./../../assets/images/download (1).jpeg"

function Cart({cartItems , RemoveItemsFromCart , increment ,  decrement}) {


  

  console.log( cartItems );
  let totall = 0
  let total_price = 0
  return (
    <div className='Cart p-5 container'>
      
      <div className="row gy-3 ">

      {cartItems.length != 0
      ?
      cartItems.map((pro , key)=>{
        return(
          <div className="col-lg-12" key={key}>

         <span style={{display:"none"}}>{totall  += pro.price * pro.amount}</span> 
          
          <div className='p-2 cart_details'>
            <div>
              <img src={pro.image ? pro.image : pro.thumbnail ? pro.thumbnail : pro.img } alt="" />
            </div>
            <div>
              <p className=' fs-5'>Price : ${pro.price.toFixed(2)}</p>
              <p className=' fs-5 fw-bold'> totall Price : $ {  (pro.price * pro.amount).toFixed(2) }</p>
            </div>
            <div className='d-flex align-items-center justify-content-center gap-2 process'>
              <button onClick={ ()=> increment( pro ) }>+</button>
              <span>{pro.amount}</span>
              <button onClick={ ()=> decrement( pro , key ) }>-</button>
            </div>
            <button onClick={ ()=> RemoveItemsFromCart(pro , key) } className='btn btn-danger'> Remove From Cart </button>
          </div>

        </div>
        )
      })
      :
      <h6 className='text-center h1 text-danger '> there is No Products Here </h6>
      }



        <div className="col-lg-8 col-sm-12 mx-auto sticky-bottom">
          <div className='d-flex align-items-center justify-content-around p-3 totall'>
            <b>Totall Cart :</b>
            <b> ${totall.toFixed(2)} </b>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
