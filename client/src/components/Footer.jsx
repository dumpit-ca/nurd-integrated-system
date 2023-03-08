import footer_logo from "../assets/images/footer-logo.png";
const Footer = () => {
   return (
      <footer className="text-left transition-all ease-in-out">
         <div className="footer px-10 py-14 text-left">
            <div className="grid-1 grid gap-24 md:grid-cols-2 lg:grid-cols-5">
               <div className="w-full">
                  <div className="mb-4 flex items-center uppercase justify-start">
                     <img src={footer_logo} alt="NURD Footer Logo" />
                  </div>
                  <p>
                     <span className="font-bold">ACHIEVE</span> KNOWLEDGE;
                     <span className="font-bold ml-px">IMPROVE</span> INSTRUCTION;
                     <span className="font-bold ml-px">PROVIDE</span> INSIGHTS;
                  </p>
               </div>
               <div className="">
                  <h6 className="footer-header mb-4 text-left">
                     <strong>Browse</strong>
                  </h6>
                  <p className="mb-4">
                     <a href="#" className="footer-links">
                        About
                     </a>
                  </p>
                  <p className="">
                     <a href="#" className="footer-links">
                        Contact Us
                     </a>
                  </p>
               </div>
               <div className="">
                  <h6 className="footer-header mb-4 text-left">
                     <strong>Update</strong>
                  </h6>
                  <p className="mb-4">
                     <a href="#" className="footer-links">
                        Events
                     </a>
                  </p>
                  <p className="">
                     <a href="#" className="footer-links">
                        Forum
                     </a>
                  </p>
               </div>
               <div className="">
                  <h6 className="footer-header mb-4 text-left">
                     <strong>Connect</strong>
                  </h6>
                  <p className="mb-4">
                     <a href="#" className="footer-links">
                        LinkedIn
                     </a>
                  </p>
                  <p className="">
                     <a href="#" className="footer-links">
                        Facebook
                     </a>
                  </p>
               </div>
               <div className="">
                  <h6 className="footer-header mb-4 text-left">
                     <strong>More</strong>
                  </h6>
                  <p className="mb-4">
                     <a href="#" className="footer-links">
                        Privacy Policy
                     </a>
                  </p>
                  <p className="">
                     <a href="#" className="footer-links">
                        Legal Terms
                     </a>
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-white footer-bottom">
            <div className="text-center flex items-center justify-center text-base">
               <a className="uppercase my-6 footer-links" href="">
                  BACK TO TOP
                  <span className="ml-px">
                     <i className="bx bxs-chevrons-up btn-to-top"></i>
                  </span>
               </a>
            </div>
            <div className="footer-bottom-header text-center py-6">
               <span>National University Research Department © 2023</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
