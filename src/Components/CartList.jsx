import React, { useState } from 'react'
import '../style/cart.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const cartList=[
  {
    id:1,
    title:"Whole french bread",
    price:1.00,
    url_image:'images.jpeg',
    quantity:1
  },
  {
    id:2,
    title:"Fresh Suiss milk",
    price:1.15,
    url_image:'fresh.webp',
    quantity:1
  },
  {
    id:3,
    title:"Butter",
    price:0.80,
    url_image:'butter.jpg',
    quantity:1
  }
]
function CartList() {
    const {cart,total,discount}=useSelector(state=>state.basket);
  const [disc,setDisc]=useState(0)
    React.useMemo(()=>{
      if(cart.length>0){
        let r=0
        cart.forEach((item)=>{
          let d=discount.find(val=>val.id==item.id)
          if(!d)return
          r+=Math.min(item.quantity,d.count)*item.price*d.value;
        })
        setDisc(r)
      }
    },[cart,discount])
  return (
    <div className='cart__list'>
      <div className="title">
      <h2>CART</h2>
      <ShoppingCartOutlinedIcon/>
      </div>
      {
        cart.map((product)=>{
          let d=product.id==1?discount[0]:(product.id==2)?discount[1]:null
          return(<CartItem key={'c'+product.id} product={product} discount={d}/>)}
        )
      }
        {cart.length>0
        &&
        (
        <div className='result'>
        <h5>Subtotal</h5>
        <span>€{total.toFixed(2)}</span>
        <h5>Discount</h5>
        <span>€{disc.toFixed(2)}</span>
        <h5>Total</h5>
        <span>€{(total.toFixed(2)-disc.toFixed(2)).toFixed(2)}</span>
      </div>
        )
        }
        
    </div>
  )
}

export default CartList