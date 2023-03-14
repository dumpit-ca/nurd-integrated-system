import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white navbar">
      <div className="px-4 lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center md:mr-10 justify-between py-3 md:py-5 md:block">
            <a href="#">
              <img src={logo} alt="NURD Logo" />
            </a>
            <div className="lg:hidden">
              <div
                onClick={() => setNavbar(!navbar)}
                className="text-3xl absolute right-8 top-8 cursor-pointer"
              >
                <box-icon name={navbar ? "x" : "menu"}></box-icon>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mr-auto">
          <div
            className={`flex-1 nav-link justify-self-center pb-3 mt-3.5 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-14 lg:space-y-0 ">
              <li className="">
                <a className="text-blue-900" href="#">
                  About
                </a>
              </li>
              <li className="">
                <a className="text-blue-900" href="#">
                  Events
                </a>
              </li>
              <li className="">
                <a className="text-blue-900" href="#">
                  Forum
                </a>
              </li>
              <li className="">
                <a className="text-blue-900" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-3 space-y-2 lg:hidden">
              {/* <div className="relative">
                <button className="cursor-pointer">
                  <i className="btn-search bx bx-search text-xl absolute lg:top-0.5 lg:right-40 top-0.5 right-3"></i>
                </button>
                <input
                  className="search-input rounded-lg border mr-2 py-1 lg:w-auto w-full"
                  type="text"
                  name="search"
                  id=""
                />
              </div> */}
              <div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                <div class="md:flex">
                  <div class="w-full p-3">
                    <div class="relative">
                      <i class="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                      <input
                        type="text"
                        class="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                        name=""
                      />
                      <span class="absolute top-4 right-5 border-l pl-4">
                        <i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="btn-login inline-block rounded-lg w-full px-4 py-2 text-center text-white"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 lg:flex lg:items-center">
          {/* <div className="relative">
            <button className="cursor-pointer">
              <i className="btn-search bx bx-search text-xl absolute lg:top-0.5 lg:right-48 top-2 right-3"></i>
            </button>
            <input
              className="search-input rounded-lg border mr-2 py-1 w-56"
              type="text"
              name="search"
              id=""
              placeholder="Search"
            />
          </div> */}
          <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full p-3">
                <div className="relative">
                  <i className="absolute fa fa-search text-gray-400 top-5 left-4"></i>
                  <input
                    type="text"
                    className="bg- h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                    name=""
                  />
                  <span className="absolute top-4 right-5 border-l pl-4">
                    <i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="btn-login text-base text-white btn-blue-900 px-4 py-2 rounded-lg"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
