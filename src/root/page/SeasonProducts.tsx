import React, { useState } from 'react'
import ProductList from '../../components/shared/ProductList'
import dummyProduct from "/"
const SeasonProducts = () => {
    const [products,setProducts] = useState([
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
            _id : "12345678",
            title : "Light blue cargo",
            price : "2000",
            discountedPrice : "1700"
        },
    ])
  return (
    <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-3xl'>Season's Best Collections</h1>
        <p className='text-gray-400 text-base mb-10'>Discover the latest trends in streetwear</p>
        <ProductList products={products}/>
    </div>
  )
}

export default SeasonProducts