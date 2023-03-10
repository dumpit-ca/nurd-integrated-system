const About = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="hero-img-container relative">
        <div className="hero-inner-container flex justify-center items-center h-full w-full z-10 absolute">
          {/* <div className="text-center md:p-0 p-5">
            <h1 className="text-5xl">
              Powering <span className="uppercase">INNOVATION</span>
              <br />
              with <span className="uppercase">IMAGINATION</span>
            </h1>
            <p className="hero-inner-text md:text-lg text-base mt-10">
              The NU Research Department empowers every researcher and provides
              support towards innovative ideas that will revolutionize
              industries.
            </p>
          </div> */}
        </div>
        <div className="hero-overlay absolute w-full bottom-0"></div>
      </div>
    </div>
  );
};

export default About;
