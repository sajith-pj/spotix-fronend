import { useState } from "react";
import BlackNavbar from "../../component/BlackNavbar";
import Footer from "../../component/Footer";
import PricingCards from "../../component/PricingCards";

const mernStack = () => {

  const [courseDetails] = useState(

    [
      {
        type:'intermediate',
        duration:'3',
        price:"25000",
        details:[
          "No. of Projects - 5",
          "3 classes / week ",
          "Placement Support",
          "24 * 7 Support",
          "Certification on Completion"
          ]
      },
      {
        type:'beginner',
        duration:'3',
        price:"35000",
        details:[
          "No. of Projects - 5",
          "3 classes / week ",
          "Placement Support",
          "One To One Tutoring",
          "24 * 7 Support",
          "Certification on Completion"
          ]
      },
      {
        type:'professional',
        duration:'3',
        price:"15000",
        details:[
          "No. of Projects - 5",
          "3 classes / week ",
          "One To One Tutoring",
          "24 * 7 Support",
          "Certification on Completion"
          ]
      }
    ]
  )
  return (
    <>
      <BlackNavbar />
      <section className="h-screen relative">
        <div className="container mx-auto h-full p-5">
          <div className=" main-intro mx-auto w-full h-full flex">
            {/* <!-- left-intro-section --> */}
            <div className="left-intro w-full h-full flex justify-center flex-col">
              <p style={{ color: "#ff6d6d" }}>Course on</p>
              <div className="headings">
                <h1 className="text-4xl md:text-6xl  font-black">Mern</h1>
                <h1 className="text-4xl md:text-6xl  font-black">Full Stack</h1>
                <h1 className="text-4xl md:text-6xl font-black">Development</h1>
              </div>
              <div className="sub-text p-2.5">
                <p className=" text-xs 2xl:text-xl ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
              </div>
              <button className="know-more-btn">Know More</button>
            </div>
            {/* <!-- left-intro-section -->
          <!-- right-intro-section --> */}
            <div className="right-intro w-full flex justify-center items-center relative hidden md:flex">
              {/* <!-- main-image-container --> */}
              <div className="right-image-container relative">
                {/* <!-- Grid image --> */}
                <div className="dotted-grid absolute"></div>
                {/* <!-- Grid image --> */}
                <img
                  src="img/main-banner-img.webp"
                  className="right-image-banner"
                  alt="main-banner-img"
                />

                {/* <!-- banner-cards -->
                    <!-- back-end-development card --> */}
                <div className="banner-cards backend-development-card lg:flex items-center hidden ">
                  <div className="logo-container nodejs-logo-bg  flex justify-center items-center ">
                    <img src="img/nodejs-logo.svg" alt="back-end-img" />
                  </div>
                  <div className="banner-cards-body ml-4">
                    <h6>Backend Development</h6>
                    <p>MongoDB,Express,Nodejs</p>
                  </div>
                </div>
                {/* <!-- back-end-development card -->
                         <!-- front-end-development card --> */}
                <div className="banner-cards frontend-development-card lg:flex items-center hidden">
                  <div className="logo-container reactjs-logo-bg flex justify-center items-center ">
                    <img src="img/reactjs-logo.svg" alt="back-end-img" />
                  </div>
                  <div className="banner-cards-body ml-4">
                    <h6>Frontend Development</h6>
                    <p>HTML,CSS,Reactjs</p>
                  </div>
                </div>
                {/* <!-- front-end-development card -->
              <!-- banner-cards --> */}
              </div>
              {/* <!-- main-image-container --> */}
            </div>
            {/* <!-- right-intro-section --> */}
          </div>
        </div>
        <img src="img/line.svg" className="line-svg" alt="line" />
      </section>
      <PricingCards courseDetails={courseDetails} pageName = "MERN Full Stack Development" />
      <Footer/>
    </>
  );
};

export default mernStack;
