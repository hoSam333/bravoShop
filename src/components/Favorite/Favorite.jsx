import React from 'react'
import "./Favorite.css"
import img from "../../assets/images/product-5-DGM0St3L.jpg"

function Favorite({favorite , RemoveItemsFromFavorite , SetItemsInCart}) {
  return (
    <div className='Favorite container my-5'>
      

      <div className="row g-2">

      {favorite.map((value , key)=>{
        return(
        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto" key={key}>
            <div className='d-flex align-items-center justify-content-center p-3 flex-column rounded-3 border one gap-2'>
              <div className='d-flex align-ite justify-content-center'>
                <img  src={value.img ? value.img : value.image ? value.image : value.thumbnail } alt="" />
              </div>
              <strong className='text-center'>{value.title.slice(0,10)}</strong>
              <b>Price : ${value.price}</b>
              <div className='d-flex align-items-center justify-content-between w-100'>
                <i onClick={ ()=>{ SetItemsInCart(value) } } class="fa-solid fa-cart-plus"></i>
                <i onClick={ ()=>{ RemoveItemsFromFavorite(value , key) } } class="fa-solid fa-xmark"></i>
              </div>
            </div>
        </div>
        )
      }) }

      </div>

    </div>
  )
}

export default Favorite
