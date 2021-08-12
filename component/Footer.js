import { Component } from "react";
import Link from "next/link";
import Social from "./SocialIcons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container py-20 md:px-0 px-10 mx-auto">
          <div className="grid md:grid-cols-4  grid-cols-1">
            <div>
              <img className="f-logo mb-5" src="img/logo-dark.svg" alt="Logo" />
              <p className="text-md font-light pr-5 md:mb-0 mb-4">
                We are passionate to develop the outstanding products which will
                be useful to all
              </p>
           
            </div>
            <div className="f-grid">
              <h6 className="font-extrabold text-lg md:mb-2 mb-1">
                QUICK LINKS
              </h6>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link> 
                </li>
                <li>
                  <Link href="/#services">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/debugindia">
                    <a>Debug India</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="f-grid">
              <h6 className="font-extrabold text-lg md:mb-2 mb-1 md:mt-0 mt-2">
                Information
              </h6>
              <ul>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms and conditions</a>
                </li>
              </ul>
            </div>
            <div className="f-grid">
              <h6 className="font-extrabold text-lg md:mb-2 mb-1  md:mt-0 mt-2">
                Contact Us
              </h6>
              <p className="py-2">
                Pathans Building,Round South Thrissur,680001
              </p>
              <Link href="tel:+91 9123456789">
                <a className="flex items-center py-2">
                  <svg
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-telephone-fill mr-2 text-2xl"
                    viewBox="0 0 16 16"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2={1}
                        y2="1.619"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#ff6d6d" />
                        <stop offset={1} stopColor="#ff4495" />
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                  +91 9895811044
                </a>
              </Link>
              <Link href="mailto:business@spotix.co">
                <a className="flex items-center">
                  <svg
                    className="mr-2 text-2xl"
                    width="18.434"
                    height="14.747"
                    viewBox="0 0 18.434 14.747"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2={1}
                        y2="1.619"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#ff6d6d" />
                        <stop offset={1} stopColor="#ff4495" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Icon_material-mail"
                      data-name="Icon material-mail"
                      d="M19.59,6H4.843A1.841,1.841,0,0,0,3.009,7.843L3,18.9a1.849,1.849,0,0,0,1.843,1.843H19.59A1.849,1.849,0,0,0,21.434,18.9V7.843A1.849,1.849,0,0,0,19.59,6Zm0,3.687L12.217,14.3,4.843,9.687V7.843l7.373,4.608L19.59,7.843Z"
                      transform="translate(-3 -6)"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                  business@spotix.co
                </a>
              </Link>
            </div>
            
          </div>
          <div className="social text-center text-white p-5">
            <Social />               
          </div>
        </div>
   
        <div className="bottom-footer text-center text-white sm:text-base text-sm p-5">
          Copyright © 2021 Spotix - All rights reserved
        </div>
      </footer>
    );
  }
}

export default Footer;
