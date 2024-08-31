import React, { useEffect, useState } from "react";
import Navigation from "../../components/shared/Navigation";
import Filter from "../../components/shared/Filter";
import Products from "../../components/shared/ProductList";
import { useParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp-939921.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
    {
      imageUrl:
        "https://cdn-media.powerlook.in/catalog/product/d/p/dp_1652_7.jpg",
      _id: "12345678",
      title: "Light blue cargo",
      price: "2000",
      discountedPrice: "1700",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     const response = await fetch(`/${category}`);
  //     const data = await response.json();
  //     setProducts(data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <div className="flex overflow-hidden">
            <Filter />
            <div className="border border-black overflow-hidden w-full px-4 ">
              <div className="flex justify-between sm:mt-12 overflow-hidden  mb-6 mx-8">
                <h1 className="text-2xl">
                  Results for {category} {products?.length} products found
                </h1>
                <div className="flex gap-2 items-center">
                  <label htmlFor="sortby">Sort By</label>

                  <select name="cars" id="cars">
                    <option value="Latest" selected>
                      Latest
                    </option>
                    <option value="priceHighToLow">Price : High to Low</option>
                    <option value="priceLowToHigh">Price : Low to High</option>
                  </select>
                </div>
              </div>
              <Products products={products} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Category;
