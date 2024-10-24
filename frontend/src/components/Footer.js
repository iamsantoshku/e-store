


import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineAndroid, AiOutlineApple } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="font-sans bg-pink-100 text-white mt-8">
      <div className="container mx-auto px-4 py-8">
        {/* App Download Section */}
        <div className="bg-gray-700 text-center py-6 mb-6">
          <h3 className="text-lg font-semibold">Download Our App</h3>
          <div className="flex justify-center gap-4 mt-4">
            <NavLink to='https://play.google.com/store/games?hl=en'><button className="bg-black text-white px-4 py-2 rounded flex items-center">
              <AiOutlineAndroid className="mr-2 size-9" />
              Get it on Google Play
            </button> </NavLink>
            <button className="bg-black text-white px-4 py-2 rounded flex items-center">
              <AiOutlineApple className="mr-2 size-9" />
              Download on the App Store
            </button>
          </div>
        </div>
        
        {/* Footer Sections */}
        <div className="bg-gray-500 flex flex-wrap justify-between py-6 px-4">
          <div className="w-full sm:w-1/4 mb-4">
            <h3 className="text-lg font-semibold">Who Are We</h3>
            <ul className="mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Help</h4>
            <ul className="mt-2">
              <li>Shipping & Return Policy</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2">
              <li>Offers</li>
              <li>Sitemap</li>
              <li>Style Files</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <FaInstagram className="text-xl" />
              <FaFacebookF className="text-xl" />
            </div>
          </div>
        </div>

        {/* Footer Categories */}
        <div className="bg-gray-400 flex flex-wrap justify-between py-6 px-4 mt-6">
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Women</h4>
            <ul className="mt-2">
              <li>Women's Indianwear</li>
              <li>Women's Westernwear</li>
              <li>Bags</li>
              <li>Women's Footwear</li>
              <li>Women's Jewellery</li>
              <li>Lingerie</li>
              <li>Women's Sportswear</li>
              <li>Women's Sleep & Lounge</li>
              <li>Women's Watches</li>
              <li>Fashion Accessories</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Men</h4>
            <ul className="mt-2">
              <li>Topwear</li>
              <li>Bottomwear</li>
              <li>Ethnicwear</li>
              <li>Men's Footwear</li>
              <li>Men's Accessories</li>
              <li>Innerwear & Sleepwear</li>
              <li>Men's Watches</li>
              <li>Bags & Backpacks</li>
              <li>Athleisure</li>
              <li>Sports & Fitness</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">Kids</h4>
            <ul className="mt-2">
              <li>Kids Indianwear</li>
              <li>Kids Westernwear</li>
              <li>Kids Footwear</li>
              <li>Kids Jewellery</li>
              <li>Feeding</li>
              <li>Kids Sportswear</li>
              <li>Kids Sleepwear</li>
              <li>Kids Accessories</li>
              <li>Toys & Games</li>
              <li>Innerwear</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 mb-4">
            <h4 className="text-lg font-semibold">House of WebReak</h4>
            <ul className="mt-2">
              <li>Twenty Dresses By Nykaa Fashion</li>
              <li>Nykd by Nykaa</li>
              <li>RSVP by Nykaa Fashion</li>
              <li>Gajra Gang by Nykaa Fashion</li>
              <li>Likha by Nykaa Fashion</li>
              <li>Mixt by Nykaa Fashion</li>
              <li>IYKYK</li>
              <li>Kica</li>
              <li>Pipa Bella By Nykaa Fashion</li>
              <li>Azai by Nykaa Fashion</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center rounded-2xl bg-black mt-6 text-sm">
          <p>&copy; 2024 WebReak Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
