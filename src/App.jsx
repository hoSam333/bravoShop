import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Outlet, json } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import Shop from "./components/Shop/Shop"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import FakeApi from "./components/Api/FakeApi"
import DummyJsonApi from "./components/Api/DummyJsonApi"
import axios from "axios"
import FakeDetails from "./components/Api/FakeDetails"
import DummyDetails from "./components/Api/DummyDetails"
import Cart from "./components/Cart/Cart"
import Swal from 'sweetalert2';
import Favorite from "./components/Favorite/Favorite"

function App() {



  const fakeurl = "https://fakestoreapi.com/products"
  const dummyurl = "https://dummyjson.com/products"

  const [fakeProducts , setFakeProducts] = useState([])
  const [dummyProducts , setDummyProducts] = useState([])


 async  function getFakeProducts(){
      let {data} = await axios.get(fakeurl)
      setFakeProducts(data)
  }

 async  function getDummyProducts(){
      let {data} = await axios.get(dummyurl)
      setDummyProducts(data.products)
  }

  useEffect(()=>{
      getFakeProducts()
      getDummyProducts()
  } , [])
  

  const [ cartItems , SetCartItems ] = useState([])
  

  useEffect(()=>{

   const storedCart = JSON.parse( localStorage.getItem("cart") )
    if(storedCart){
      SetCartItems(storedCart)
    }else{
      SetCartItems([])
    }

  } , [])

  console.log( JSON.parse(localStorage.getItem("cart")) );

function SetItemsInCart( pro ){
    let selectedProduct = cartItems.find( item =>  item.title == pro.title  )
    console.log(selectedProduct);
    if( !selectedProduct ){
      SetCartItems([ ...cartItems , {...pro , amount : 1 } ])
      console.log( cartItems );
      Swal.fire({
        title: `Your Product <span class='text-primary'>(${pro.title})</span>  add Successfully`,
        icon: "success" ,
        showConfirmButton:false ,
        timer : 1500 ,
        
      });
    }else{
      // ++selectedProduct.amount
      Swal.fire({
        title: `this product you already added !`,
        icon: "info" ,
        showConfirmButton:false ,
        timer : 1500 ,
        
      });
    }

  }


  function increment(pro){
      ++pro.amount
      SetCartItems([...cartItems ])
      console.log( pro.amount );
  }
  function decrement(pro){
      if(pro.amount > 1){
        --pro.amount
      }else{
        RemoveItemsFromCart(pro)
      }
      SetCartItems([...cartItems ])
      console.log( pro.amount );
  }

function RemoveItemsFromCart( pro , key ){
  Swal.fire({
    title: `Are you sure to delete product <span class='text-danger'>(${pro.title})</span> `,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      cartItems.splice(key , 1)
      SetCartItems([...cartItems])

      // useEffect(()=>{
        // localStorage.setItem("cart" , JSON.stringify( cartItems ))
      // } , [])
    }
  });
} 

useEffect(()=>{
  localStorage.setItem("cart" , JSON.stringify( cartItems ))
} , [cartItems ])


const [favorite , setFavorite] = useState([])

function  setItemsInFavorite(pro){
  let selectedItem = favorite.find( item => item.title == pro.title )
  console.log(selectedItem);
  if(!selectedItem){
    Swal.fire({
      title: `Your Product <span class='text-primary'>(${pro.title})</span>  add Successfully`,
      icon: "success" ,
      showConfirmButton:false ,
      timer : 1500 ,
      
    });
    setFavorite([...favorite , pro])
  }else{
    Swal.fire({
      title: `this product you already added !`,
      icon: "info" ,
      showConfirmButton:false ,
      timer : 1500 ,
      
    });
  }
}




useEffect(()=>{

  const chekFav = JSON.parse( localStorage.getItem("favorite") )
  if(chekFav){
    setFavorite(chekFav)
  }else{
    setFavorite([])
  }

} , [])





function RemoveItemsFromFavorite(pro , key){
  Swal.fire({
    title: `Are you sure to delete product <span class='text-danger'>(${pro.title})</span> `,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    
  favorite.splice(key , 1)
  setFavorite([...favorite])

    }})
}

useEffect(()=>{
  localStorage.setItem("favorite" , JSON.stringify( favorite ))
} , [favorite ])






const [dark , setDark ] = useState(false)

function isDark(){
  setDark(!dark)
}

  return (
 <div className={dark ? "dark BODY" : " BODY"} >

 <BrowserRouter  >
    <Navbar cartItems={cartItems} dark={dark} isDark={isDark} favorite={favorite}  />

    <Routes>

        <Route path="/"  element={<Home SetItemsInCart={SetItemsInCart} setItemsInFavorite={setItemsInFavorite}/>}  />
        <Route path="/about" element={ <Outlet/> } >
            <Route path="" element={<About/>}   />
            <Route path="shop" element={<Shop/>}   />
        </Route>
        <Route path="/shop" element={ <Shop/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/fake" element={ <Outlet/> } >
            <Route  path="" element={ <FakeApi fakeProducts={fakeProducts} getFakeProducts={getFakeProducts} SetItemsInCart={SetItemsInCart} setItemsInFavorite={setItemsInFavorite} />} />
            <Route path="products/:id" element={<FakeDetails/>} />
        </Route>
        <Route path="/dummy" element={  <Outlet/> } >
            <Route path="" element={<DummyJsonApi dummyProducts={dummyProducts} getDummyProducts={getDummyProducts} SetItemsInCart={SetItemsInCart} setItemsInFavorite={setItemsInFavorite} />} />
            <Route path="products/:id" element={ <DummyDetails/> } />
        </Route>

        <Route path="/cart" element={ <Cart cartItems={cartItems} RemoveItemsFromCart={RemoveItemsFromCart}
        increment = {increment} decrement = {decrement}  /> } />
        <Route path="/favorite" element={ <Favorite favorite={favorite} RemoveItemsFromFavorite={RemoveItemsFromFavorite} SetItemsInCart={SetItemsInCart} /> } />
        
    </Routes>
    
   <Footer/>
 </BrowserRouter>

 </div>
  )
}

export default App
