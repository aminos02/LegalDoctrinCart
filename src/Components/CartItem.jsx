import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct,removeProduct,addDiscount } from '../redux/basketSlice'
function CartItem({product,discount}) {
  const dispatch=useDispatch()
  console.log(product.id,":::",discount)
  
  // React.useMemo(()=>{
  //   if(product.id==2){

  //   }
  //   else if(product.id==3){
  //     let d=Math.floor(product.quantity/2);
  //     if(d>0)
  //     {
  //       dispatch(addDiscount({id:product.id,}))
  //     }
  //   }
  // },[product.quantity])
  return (
    <div className='cart__item'>
      <img src={product.url_image} alt="" />
      <div className="cart__info">
        <h4>{product.title}</h4>
        <div className="quantity">
          <h5>quantity</h5>
          <button onClick={()=>{
            dispatch(removeProduct({id:product.id}))
          }}>-</button>
          <h5>{product.quantity}</h5>
          <button onClick={()=>{
            dispatch(addProduct({id:product.id}))
          }}>+</button>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
      <span className='price' style={{flex:1,textAlign:'right',color:discount?.count>0?'red':'black',textDecoration:discount?.count>0?'line-through':'initial'}} >€{(product.price*product.quantity).toFixed(2)}</span>
      {discount?.count>0 &&
      <span className='price' style={{flex:1,textAlign:'right'}} >
        €{(product.price*((product.quantity)-(Math.min(discount.count,product.quantity)*discount.value))).toFixed(2) }
      </span>}
      </div>
    </div>
  )
}

export default CartItem