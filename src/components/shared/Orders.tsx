import React, { useState } from 'react'

const Orders = () => {
  const [products, setProducts] = useState([
    
    {
      imageUrl: "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl: "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl: "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl: "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
  ]);

  return (
    <div className='flex flex-col  w-full'>
      <h1 className='text-2xl xl:p-3'>Your Orders</h1>
      <div className='overflow-scroll max-h-[525px]'>
        {products.map((product, index) => (
          <div key={product._id + index} className="w-full flex justify-start items-start sm:items-center h-auto sm:h-40 p-1 border rounded-sm my-3">
            <img className="h-full w-[20%] border rounded-sm object-cover" src={product.imageUrl} alt={product.title} />
            <div className="h-full w-[80%] sm:p-2">
              <div className="upper w-full flex p-1 sm:p-3 justify-between items-start flex-col sm:flex-row h-[80%] ">
                <div className="left w-full sm:w-[80%] flex flex-col items-start pl-1">
                  <h2 className="text-sm">{product.title}</h2>
                  <h3 className="text-sm">Color <div style={{ backgroundColor: 'black' }} className="inline-block border rounded-sm h-3 w-3 mx-1 mt-[4px]"></div> Size · small · SKU 04-955630-small</h3>
                  <div>
                    <p className="mt-1 text-[15px]"><span className="font-semibold">Quantity: </span> 1</p>
                    <p className="mt-1 text-[15px]"><span className="font-semibold">Order Date: </span> Aug 30, 2024</p>
                    <p className="mt-1 text-[15px]"><span className="font-semibold">Payment ID :</span> pay_Or8KiNZrK7mjof</p>
                  </div>
                </div>
                <div className="right w-full flex flex-row justify-start items-center gap-3 sm:gap-0 sm:flex-col sm:w-[20%]">
                  <h1 className="font-semibold text-sm sm:text-xl my-1 sm:my-0">₹{product.discountedPrice}</h1>
                  <h3 className="inline-block text-sm sm:text-md font-semibold text-green-600">(15% off)</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
      <button className='p-3 bg-gray-500 max-w-48 border rounded-2xl'>Load More</button>
      </div>
    </div>
  );
};

export default Orders;
