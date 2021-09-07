import { useState } from "react"
import BlackNavbar from "../../component/BlackNavbar"
import Footer from "../../component/Footer"
import PricingCards from "../../component/PricingCards"


const uiux = () => {

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
        price:"25000",
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
      <div className="container p-5 sm:p-0 mx-auto h-full">
        {/* <!-- main-intro --> */}
        <div className="  md:pr-20  md:pl-20 xl:pr-0 xl:pl-0 mx-auto h-full flex">

          {/* <!-- left-intro-with-text --> */}
          <div className="left-intro w-full h-full flex justify-center flex-col items-center ">
          <div className="h-full flex justify-center flex-col">
            <p className="2xl:text-xl" style={{color: "#ff6d6d"}}>Course on</p>
            <div className="headings">
              <h1 className="text-4xl md:text-6xl 2xl:text-9xl font-black">UI / UX</h1>
              <h1 className="text-4xl md:text-6xl 2xl:text-9xl font-black">Designing</h1>
            </div>
            <div className=" sub-text mt-4 mb-4">
              <p className=" text-xs 2xl:text-xl ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
            </div>
            <button className="know-more-btn">Know More</button>
          </div>
          </div>

          {/* <!-- left-intro-with-text -->

          <!-- right-intro-with-images --> */}
          <div
            className="right-intro w-full flex justify-center items-center relative hidden md:flex">

            {/* <!-- main-image-container --> */}
            <div className="right-image-container relative">
                      {/* <!-- Grid image --> */}
            <div className="uiux-dotted-grid absolute"></div>
            {/* <!-- Grid image --> */}
              <img
                src="img/uiux-banner.webp"
                className="right-image-banner"
                alt="main-banner-img"
              />

              {/* <!-- banner-cards -->
                    <!-- figma-development card --> */}
                    <div className=" ui-tools-card  figma flex items-center">
                      <div className=" figma-logo flex justify-center items-center h-full w-full">
                          <img src="img/figma-logo.svg" alt="back-end-img" />
                      </div>
                  </div>
                    {/* <!-- figma-development card -->

                         <!-- adobeXd-development card --> */}
                         <div className=" ui-tools-card xd flex items-center">
                            <div className=" xd-logo  flex justify-center items-center h-full w-full rounded-full">
                                <img src="img/adobe-xd.svg" className="w-1/2" alt="back-end-img" />
                            </div>
                        </div>
                    {/* <!-- adobeXd-development card --> */}

                          {/* <!-- sketch-development card --> */}
                          <div className=" ui-tools-card sketch flex items-center">
                            <div className=" xd-logo  flex justify-center items-center h-full w-full rounded-full">
                                <img src="img/sketch-logo.svg" className="w-1/2" alt="back-end-img" />
                            </div>
                        </div>
                    {/* <!-- sketch-development card -->
              <!-- banner-cards --> */}
            </div>
            {/* <!-- main-image-container --> */}
          </div>
        {/* <!-- right-intro-with-images --> */}
        </div>
      </div>
      <img src="img/line.svg" className="line-svg" alt="line" />
    </section>
    <PricingCards courseDetails={courseDetails} pageName = "UIUX Designing"/>
    <Footer/>
        </>
    )
}


export  default uiux