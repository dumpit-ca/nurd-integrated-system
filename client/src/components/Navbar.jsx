import { useState } from "react";
import logo from "../../src/images/nurd-logo.png";
const Navbar = () => {
   let [open, setOpen] = useState(false);
   return (
      // <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
      //    <div className="container flex flex-wrap items-center justify-between mx-auto">
      //       <a href="" className="flex items-center">
      //          <img src={logo} alt="NURD Logo" />
      //       </a>

      //       <div className="flex md:order-2">
      //          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-12 cursor-pointer lg:hidden">
      //             <box-icon name={open ? "x" : "menu"}></box-icon>
      //          </div>
      //       </div>
      //       <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      //          <ul
      //             className={`lg:flex lg:items-center lg:gap-20  lg:pb-0 pb-12 lg:text-base cursor-pointer absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in-out ${
      //                open ? "top-44 opacity-100" : "top-[-490px]"
      //             } lg:opacity-100 opacity-0`}
      //          >
      //             <li>
      //                <a href="#">About</a>
      //             </li>
      //             <li>
      //                <a href="#">Events</a>
      //             </li>
      //             <li>
      //                <a href="#">Forum</a>
      //             </li>
      //             <li>
      //                <a href="#">Contact Us</a>
      //             </li>
      //             <div className="flex gap-4 items-center form-search md:mt-0 mt-2">
      //                <div className="relative">
      //                   <input className="search-input rounded-lg border mr-2 py-1" type="text" name="search" id="" />
      //                   <button className="cursor-pointer">
      //                      <i className="btn-search bx bx-search text-xl absolute md:top-0.5 md:right-3 top-0.5 right-3"></i>
      //                   </button>
      //                </div>
      //                <button className="btn-login rounded-lg font-bold md:px-8 md:py-2 py-1 px-5">Log in</button>
      //             </div>
      //          </ul>
      //       </div>
      //    </div>
      // </nav>
      <nav class="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
         <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
               <img src={logo} alt="NURD Logo" />
            </a>
            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-12 cursor-pointer lg:hidden">
               <box-icon name={open ? "x" : "menu"}></box-icon>
            </div>
            <div className="nav-link flex">
               <ul
                  className={`lg:flex lg:items-center lg:gap-20  lg:pb-0 pb-12 lg:text-base cursor-pointer absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in-out ${
                     open ? "top-44 opacity-100" : "top-[-490px]"
                  } lg:opacity-100 opacity-0`}
               >
                  <li>
                     <a href="#">About</a>
                  </li>
                  <li>
                     <a href="#">Events</a>
                  </li>
                  <li>
                     <a href="#">Forum</a>
                  </li>
                  <li>
                     <a href="#">Contact Us</a>
                  </li>
                  <div className="flex gap-4 items-center form-search md:mt-0 mt-2">
                     <div className="relative">
                        <input className="search-input rounded-lg border mr-2 py-1" type="text" name="search" id="" />
                        <button className="cursor-pointer">
                           <i className="btn-search bx bx-search text-xl absolute md:top-0.5 md:right-3 top-0.5 right-3"></i>
                        </button>
                     </div>
                  </div>
                  <a className="btn-login rounded-lg font-bold md:px-8 md:py-2 py-1 px-5">Log in</a>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
