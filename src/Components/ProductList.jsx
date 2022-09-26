import React from 'react'
import ProductItem from './ProductItem'
import '../style/products.css'

const products=[
    {
      id:1,
      title:"Whole french bread",
      reviews:4.5,
      description:"made in paris and destinated to the whole world",
      price:1.00,
      url_image:'images.jpeg',
    },
    {
      id:2,
      title:"Fresh Suiss milk",
      reviews:4.5,
      description:"semi skimmed milk that comes straight from the aipes farmers",
      price:1.15,
      url_image:'fresh.webp',
    },
    {
      id:3,
      title:"Butter",
      reviews:4.5,
      description:"produced by us to insure a high quality butter",
      price:0.80,
      url_image:'butter.jpg',
    }
]
function ProductList() {

  return (
    <div className='product__list'>
      <h2>Products</h2>
      {
        products.map((product)=>{
          
          return <ProductItem key={product.id} product={product}/>})
      }  
    </div>
  )
}

export default ProductList