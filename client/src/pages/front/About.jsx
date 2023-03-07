import Hero from "../../assets/images/hero-img.png";
import logo from "../../assets/images/nurd-logo.png";
const About = () => {
   return (
      <div className="container mx-auto">
         <div className="md:py-5 md:px-0 p-5 about">
            <div className="grid md:grid-cols-2 md:place-items-center md:gap-0 gap-4 grid-cols-1 hero-header">
               <div className="hero-header-text">
                  <h1 className="text-5xl w-50">
                     Powering <br /> innovation with <br />
                     imagination.
                  </h1>
                  <p className="hero-header-subheader text-lg w-96">The NU Research Department empowers every researcher and provides support towards innovative ideas that will revolutionize industries.</p>
               </div>
               <div className="hero-header-img">
                  <img src={Hero} className="hero-img" alt="NU Hero Image" />
               </div>
            </div>
            <div className="md:my-24 md:flex gap-24 items-center md:justify-center">
               <img src={logo} className="about-header-img" alt="" />
               <div className="line"></div>
               <div className="about-header">
                  <h1 className="md:text-6xl text-lg">About Us</h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
