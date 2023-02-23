import { useState } from "react";
import logo from "../assets/images/nurd-logo.png";

export default function NavBar() {
   const [navbar, setNavbar] = useState(false);

   return (
      <nav className="w-full bg-white navbar">
         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
               <div className="flex items-center justify-between py-3 md:py-5 md:block">
                  <a href="#">
                     <img src={logo} alt="NURD Logo" />
                  </a>
                  <div className="md:hidden">
                     <div onClick={() => setNavbar(!navbar)} className="text-3xl absolute right-8 top-12 cursor-pointer">
                        <box-icon name={navbar ? "x" : "menu"}></box-icon>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className={`flex-1 nav-link justify-self-center pb-3 mt-3.5 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                  <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 gap-10">
                     <li className="">
                        <a href="#">About</a>
                     </li>
                     <li className="">
                        <a href="#">Events</a>
                     </li>
                     <li className="">
                        <a href="#">Forum</a>
                     </li>
                     <li className="">
                        <a href="#">Contact Us</a>
                     </li>
                  </ul>
                  <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                     <div className="relative">
                        <input className="search-input rounded-lg border mr-2 py-1 md:w-auto w-full" type="text" name="search" id="" />
                        <button className="cursor-pointer">
                           <i className="btn-search bx bx-search text-xl absolute md:top-0.5 md:right-3 top-0.5 right-3"></i>
                        </button>
                     </div>
                     <a href="#" className="btn-login inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                        Log in
                     </a>
                  </div>
               </div>
            </div>
            <div className="hidden space-x-2 md:flex md:items-center">
               <div className="relative">
                  <input className="search-input rounded-lg border mr-2 py-1" type="text" name="search" id="" />
                  <button className="cursor-pointer">
                     <i className="btn-search bx bx-search text-xl absolute md:top-0.5 md:right-3 top-0.5 right-3"></i>
                  </button>
               </div>
               <a href="#" className="btn-login px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
                  Log in
               </a>
            </div>
         </div>
      </nav>
   );
}
