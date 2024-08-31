import { BsCart4 } from "react-icons/bs";

const foodItems = [
  {
    name: "Pizza",
    price: 5,
    url: "/public/pizza.jpg",
  },
  {
    name: "Burger",
    price: 4,
    url: "/public/burger.jpg",
  },
  {
    name: "Pasta",
    price: 6,
    url: "/public/pasta.jpg",
  },
  {
    name: "Salad",
    price: 3,
    url: "/public/salad.jpg",
  },
  {
    name: "Sushi",
    price: 7,
    url: "/public/sushi.jpg",
  },
];

const Food = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-red-200 to-red-400 text-gray-900">
      <div className="flex flex-col items-center justify-center gap-6 mt-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Al Reem Mart</h1>
        <p className="text-2xl px-6 py-3 bg-blue-300 text-blue-900 rounded-xl shadow-md">
          Main Courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-6 px-4">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full sm:w-80 flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <img
              className="w-32 h-32 object-cover rounded-lg sm:rounded-none sm:ml-0 sm:mr-4"
              src={item.url}
              alt={item.name}
            />
            <div className="flex flex-col sm:items-start text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-lg text-gray-700">Price: ${item.price}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md shadow-md transition-all sm:whitespace-nowrap">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-screen-md  px-5 py-3 mt-10 flex items-center justify-between bg-green-500 hover:bg-green-600 rounded-md shadow-md transition-all">
        <BsCart4 className="w-8 h-8 text-white" />
        <button className="text-white text-lg font-semibold">
          Checkout (1)
        </button>
      </div>
      <footer className="mt-auto py-4 bg-gray-800 text-white w-full text-center">
        © 2024 Al Reem Mart - All Rights Reserved
      </footer>
    </div>
  );
};

export default Food;
