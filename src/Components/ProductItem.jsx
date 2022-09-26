import React from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/basketSlice';

function ProductItem({product}) {
  const dispatch=useDispatch()
  return (
    <div className='product__item'>
        <img src={product?.url_image}></img>
        <div className='product__info'>
            <div className='product__info_top'>
                <h4>{product?.title}</h4>
                <Rating name="half-rating-read" defaultValue={product?.reviews} precision={0.5} readOnly />
            </div>
            <div className="product__info_bottom">
              <p>{product?.description}</p>
              <span className='price'>€{product?.price}</span>
            </div>
            <button onClick={()=>{
              dispatch(addProduct(product))
            }}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductItem