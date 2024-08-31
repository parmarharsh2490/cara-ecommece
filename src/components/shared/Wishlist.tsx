import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Wishlist = () => {
    const [products,setProducts] = useState([
        {
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
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
            imageUrl : "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
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

    const [page, setPage] = useState<number>(0); // Start with page 0

    const updatePage = (value: number) => {
        setPage((prev) => Math.max(0, Math.min(prev + value, Math.ceil(products.length / 4) - 1)));
    };

    return (
        <div className='flex flex-col justify-center gap-15 ml-8'>
            <h1 className='font-semibold text-xl sm:text-2xl'>Your WishList</h1>
            <div className='flex items-center'>
                <GrPrevious 
                    onClick={() => updatePage(-1)} 
                    size={25} 
                    className={page === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
                />
                <div className='flex items-center max-w-[100%] justify-start gap-9 overflow-x-scroll'>
                    {products.map((product, index) => (
                        <div 
                            key={index} 
                            className={`flex flex-col max-w-[275px] shadow-lg p-5 ${index >= page * 4 && index <= (page * 4) + 3 ? "" : "hidden"}`}>
                            <img src={product.imageUrl} className='max-w-[250px] bg-cover aspect-auto' alt="" />
                            <h1 className='sm:font-bold sm:text-sm tracking-tighter p-1 text-black'>{product.title}</h1>
                            <div className='flex justify-between p-1 items-center'>
                                <p className='font-bold my-1'>₹{product.discountedPrice}</p>
                                <div className="flex justify-center items-center"><s className="mr-1 text-slate-400">₹1199</s><p className="font-bold my-1 text-green-600">(33% off)</p></div>
                            </div>
                            <div className="w-full flex justify-between gap-1 items-center sm:flex-row flex-col ">
                                <button className=" sm:w-[48%] w-full text-xs p-1 border text-red-600 font-semibold  duration-500 border-red-600 hover:text-red-600">Remove</button>
                                <button className="sm:w-[48%] w-full text-xs p-1 border hover:bg-slate-800 font-semibold duration-500 border-slate-800 hover:text-white">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
                <GrNext 
                    onClick={() => updatePage(1)} 
                    size={25} 
                    className={page === Math.ceil(products.length / 4) - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
                />
            </div>
        </div>
    );
}

export default Wishlist;
