import logo from '../../src/images/nurd-logo.png';
const Navbar = () => {
   return (
      <nav className="navbar flex">
         <a href="">
            <img src={logo} alt="NURD Logo" />
         </a>
         <div className="nav-link">
            <ul className="flex flex-row">
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
      </nav>
   );
};

export default Navbar;
