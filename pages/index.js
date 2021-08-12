import { Component } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Testimonial from "../component/Testimonial";
import Link from "next/link";

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />

        <section className="header-sec w-full">
          <div className="container-fluid h-inner h-full">
            <div className="row h-full">
              <div className="col-md-12 sm:p-0 p-2 h-full text-center flex flex-col items-center justify-center">
                <h1 className="sm:text-7xl text-3xl font-extrabold">
                  Spot It &amp; Make It <br />
                  For The Future
                </h1>
                <p className="text-sm opacity-90 mt-2">
                  We research and develop the ourstanding problem with <br />
                  the suitable for solution for the end user.
                </p>
                <div className="flex mt-8">
                  <a
                    
                    className="btn sm:py-3 py-2 sm:px-10 px-6 sm:mr-4 mr-2 text-white focus:outline-none focus:shadow-outline block shadow-md hover:text-white"
                  >
                    Discover
                  </a>
                  <Link href="/debugindia">
                    <a className="btn-outline sm:py-3 py-2 sm:px-10 px-6 text-white focus:outline-none focus:shadow-outline block shadow-md">
                      Debug India
                    </a>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="sec-pad service-sec">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="text-center w-6/12">
                <h4 className="heading font-medium text-lg">Our Services</h4>
                <p className="text-center pt-0 md:text-3xl text-2xl font-extrabold sub-head">
                  Lorem ipsum dolor sit amet, consetetur
                  <br className="xl:block hidden" />
                  sadipscing elitr
                </p>
              </div>
            </div>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 py-14">
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/web.svg" alt="web" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">Web Development</h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/app.svg" alt="App" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">App Development</h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/webapp.svg" alt="webapp" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">
                    Web App Development
                  </h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/digital.svg" alt="digital" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">Digital Marketing</h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/tech-support.svg" alt="tech-support" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">Tech Support</h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
              <div className="w-80 service-card mx-auto flex-col justify-center text-center px-2 py-5">
                <div className="icon m-auto">
                  <img src="img/training.svg" alt="training" />
                </div>
                <div className="card-body">
                  <h5 className="text-2xl font-bold pt-4">Training</h5>
                  <p className="text-sm pt-3">
                    Our team of technology enthusiastic developers and we will
                    serve the quality development team in different
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* business sec */}

        <section className="business-sec">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <img
              className="md:block hidden"
              src="img/grow-bus.webp"
              alt="Business"
            />
            <div className="right-b flex justify-center items-center md:py-0 md:px-0 py-16 px-12">
              <div className="right-content flex-col sm:w-auto w-full">
                <h6 className="xl:text-5xl lg:text-4xl text-2xl font-extrabold lg:mb-4 mb-2">
                  Grow your <br />
                  business fast.
                </h6>
                <div
                  className="lg:pl-3 pl-2 lg:pr-6 pr-3 xl:py-4 lg:py-3 py-2 lg:my-4 my-2  user-select-none rounded-2xl
                   transition-colors duration-150 ease-in-out  bg-white orange"
                >
                  <div className="flex items-center text-base lg:space-x-3 space-x-2 ">
                    <span className="inline-flex items-center justify-cente  rounded-xl  xl:p-5 lg:p-4 p-3.5 text-white bg-teal-100 text-teal-700">
                      <img src="img/lap.svg" alt="Lap" />
                    </span>
                    <div className="flex-col">
                      <p className="xl:text-2xl lg:text-xl sm:text-md text-sm font-bold">
                        Increase Your Revenue
                      </p>
                      <p className="sm:w-64 w-full lg:text-sm text-xs font-normal opacity-60 text-2clip">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam...
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:pl-3 pl-2 lg:pr-6 pr-3 xl:py-4 lg:py-3 py-2 user-select-none rounded-2xl
                   transition-colors duration-150 ease-in-out  bg-white  pink"
                >
                  <div className="flex items-center text-base lg:space-x-3 space-x-2">
                    <span className="inline-flex items-center justify-cente  rounded-xl  xl:p-5 lg:p-4 p-3.5 text-white bg-teal-100 text-teal-700">
                      <img src="img/phone.svg" alt="phone" />
                    </span>
                    <div className="flex-col">
                      <p className="xl:text-2xl lg:text-xl sm:text-md text-sm font-bold">
                        Make Business Easy
                      </p>
                      <p className="sm:w-64 w-full lg:text-sm text-xs font-normal opacity-60 text-2clip">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam...
                      </p>
                    </div>
                  </div>
                </div>
                <button className="btn-still xl:text-2xl lg:text-xl text-md font-extrabold lg:py-4 py-3 xl:px-6 px-4 lg:mt-8 mt-4 text-white lg:rounded-2xl rounded-xl shadow-var">
                  Know More
                </button>
              </div>
            </div>
            <div className="left-b flex justify-center items-center  md:px-0 py-16 px-12">
              <div className="left-content flex-col sm:w-8/12 w-full mx-auto ">
                <h6 className="xl:text-5xl lg:text-4xl text-2xl font-extrabold lg:mb-6 mb-2">
                  Lorem ipsum dolor <br /> sit amet
                </h6>
                <p className="lg:text-md text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea{" "}
                </p>
                <button className="btn-still flex items-center xl:text-2xl lg:text-xl text-md font-extrabold lg:py-4 py-3 xl:px-6 px-4 lg:mt-8 mt-4 text-white lg:rounded-2xl rounded-xl shadow-var">
                  <svg
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-telephone-fill mr-2 text-2xl"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  Schedule a free consultation
                </button>
              </div>
            </div>
            <img
              className="md:block hidden"
              src="img/schedule.webp"
              alt="Schedule"
            />
          </div>
        </section>

        <Testimonial />

        {/* debugindia-banner */}

        <section className="db-banner">
          <div className="banner-inner">
            <h2
              style={{ color: "#FF6D6D" }}
              className="sm:text-5xl text-2xl font-extrabold"
            >
              Debug India{" "}
              <span className="sm:text-xl text-base font-light text-white">
                is a training Program
              </span>{" "}
            </h2>
            <p className="text-left text-white sm:text-lg text-sm py-2">
              Courses Include:
            </p>
            <div className="flex items-center justify-start text-white sm:text-2xl text-xl font-semibold mt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-check-circle-fill text-white mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              Full Stack Development
            </div>
            <div className="flex items-center justify-start text-white sm:text-2xl text-xl font-semibold my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-check-circle-fill text-white mr-2 "
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              UI / UX Designing
            </div>
            <Link href="/debugindia#registration">
              <button className="btn-still flex justify-center items-center sm:text-2xl text-lg font-extrabold sm:py-4 sm:px-4 py-3 px-3 sm:mt-8 mt-5 sm:w-1/2 w-40 text-white rounded-2xl shadow-var">
               Explore Now
              </button>
            </Link>
            
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;
