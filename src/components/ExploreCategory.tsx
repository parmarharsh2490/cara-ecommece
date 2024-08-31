import { Link } from 'react-router-dom';
import categoryShirtImage from '/Shirts.avif';
import categoryBottomsImage from '/Bottoms.avif';
import categoryJacketImage from '/Jackets.avif';
import categoryCo_OrdsImage from '/Co-Ords.avif';
import categoryTShirtImage from '/T-shirts.avif';
import categoryOnSaleImage from '/On-Sale.avif';

const categories = [
  { imageUrl: categoryShirtImage, link: '/category/shirt', name: 'Shirt' },
  { imageUrl: categoryBottomsImage, link: '/category/bottoms', name: 'Bottoms' },
  { imageUrl: categoryJacketImage, link: '/category/jackets', name: 'Jackets' },
  { imageUrl: categoryCo_OrdsImage, link: '/category/co-ords', name: 'Co-Ords' },
  { imageUrl: categoryTShirtImage, link: '/category/t-shirts', name: 'T-Shirts' },
  { imageUrl: categoryOnSaleImage, link: '/category/on-sale', name: 'On Sale' }
];

const ExploreCategory = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl mb-2">Explore Products</h1>
      <p className="text-sm text-gray-400 mb-6">Select Category</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 lg:flex items-center justify-around  w-full">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="flex flex-col items-center p-3 max-w-[175px] shadow-md rounded-3xl border-none hover:scale-105 sm:hover:scale-110 hover:shadow-2xl transition-all duration-700"
          >
            <img
              className="w-full h-40 object-cover rounded-2xl mb-2"
              src={category.imageUrl}
              alt={`${category.name} category`}
            />
            <p className="text-center font-bold">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreCategory;
