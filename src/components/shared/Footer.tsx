import React from 'react';

const Footer = () => {
  return (
    <div className="p-6 mx-auto mt-10">
      <div className="lg:flex">
        <div className="w-full -mx-6 lg:w-2/5">
          <div className="px-6">
            <a href="#" className="sm:mt-5">
              <img className="w-auto h-7" src="/logo.png" alt="Logo" />
            </a>
            <p className="max-w-sm mt-6 text-gray-500">
              Join 31,000+ others and never miss out on new tips, tutorials, and more.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 lg:mt-0 lg:flex-1">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {/* <div className='flex flex-row items-center justify-around flex-wrap'> */}
            {/* About section */}
            <div>
              <h3 className="text-gray-700 uppercase">About</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Company</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Community</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Careers</a>
            </div>

            {/* Blog section */}
            <div>
              <h3 className="text-gray-700 uppercase">Blog</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Tech</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Music</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Videos</a>
            </div>

            {/* Products section */}
            <div>
              <h3 className="text-gray-700 uppercase">Products</h3>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Mega cloud</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Aperion UI</a>
              <a href="#" className="block mt-2 text-sm text-gray-600 hover:underline">Meraki UI</a>
            </div>

            {/* Contact section */}
            <div>
              <h3 className="text-gray-700 uppercase">Contact</h3>
              <span className="block mt-2 text-sm text-gray-600 hover:underline">+91 9123456789</span>
              <span className="block mt-2 text-sm text-gray-600 hover:underline">parmarharsh6480.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="h-px my-6 bg-gray-200 border-none" />

      {/* Footer note */}
      <div>
        <p className="text-center text-gray-500">© Brand 2024 - Developed and Designed by Parmar Harsh</p>
      </div>
    </div>
  );
};

export default Footer;
