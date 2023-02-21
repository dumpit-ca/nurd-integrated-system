import logo from '../../src/images/nurd-logo.png';
const Navbar = () => {
   return (
      <nav className="navbar w-full fixed">
         <div className="md:flex items-center justify-evenly bg-white py-4 md:px-10 px-7">
            <a href="">
               <img src={logo} alt="NURD Logo" />
            </a>
            <div className="nav-link flex">
               <ul className="md:flex md:flex-row md:items-center md:gap-20 md:text-base flex-col cursor-pointer">
                  <li>
                     <a href="#">About</a>
                  </li>
                  <li>
                     <a href="#">Events</a>
                  </li>
                  <li>
                     <a href="#">Announcements</a>
                  </li>
                  <li>
                     <a href="#">Forum</a>
                  </li>
                  <li>
                     <a href="#">Contact Us</a>
                  </li>
               </ul>
            </div>
            <div className="flex gap-4 items-center form-search md:mt-0 mt-2">
               <div className="relative">
                  <input className="search-input rounded-lg border mr-2 py-1" type="text" name="search" id="" />
                  <button className="cursor-pointer">
                     <i className="btn-search bx bx-search text-xl absolute md:top-0.5 md:right-3 top-0.5 right-3"></i>
                  </button>
               </div>
               <button className="btn-login rounded-lg font-bold md:px-8 md:py-2 py-1 px-5">Log in</button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
