import footer_logo from "../assets/images/footer-logo.png";
const Footer = () => {
   return (
      <div className="footer grid grid-cols-5 gap-10 md:p-12 mx-auto">
         <div className="footer-logo grid-rows-2">
            <img src={footer_logo} alt="NURD Logo" className="my-5" />
            <p className="uppercase">
               <strong>ADVANCE </strong> KNOWLEDGE;
               <strong>IMPROVE</strong> INSTRUCTION;
               <strong>PROVIDE</strong> INSIGHTS;
            </p>
         </div>
         <div className="footer-link-1 grid-rows-3">
            <h5 className="font-bold">Browse</h5>
            <a href="">About</a>
            <a href="">Contact Us</a>
         </div>
      </div>
   );
};

export default Footer;
