import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const Product = ({product}) => {
  return (
    <div key={product._id}>
                    <img src={product.imageUrl} className=' hover:scale-105 transition-all bg-cover'  alt="" />
                    {/* <FaRegHeart className='relative -top-64 left-48 scale-125 border rounded-full bg-cover border-blue-900 bg-white z-10'/> */}
                    <p className='font-bold mt-1'>{product.title}</p>
                    <div className='flex justify-between px-1 my-2'>
                        <p className='font-bold mr-1'>₹{product.discountedPrice}</p>
                        <p className=''>
                          <span className='text-slate-400 line-through mr-1'>₹{product.price}</span>
                          <span className='text-green-600 font-bold'>(33% off)</span>
                        </p>
                    </div>
                    <button className='border border-black p-1 sm:p-2 hover:bg-slate-800 hover:text-white transition-all duration-500 w-full'>View Details</button>
                </div>
  )
}

export default Product