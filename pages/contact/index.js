import { Component } from "react";
import ContactForm from "../../component/ContactForm";
import Social from "../../component/SocialIcons";
import Link from "next/link";

class Contact extends Component {
  render() {
    return (
      <>
        <nav className="nav w-full fixed bg-transparent z-10 top-0 md:px-10 px-8 md:py-6 py-4">
          <Link href="/">
          <a className="nav-brand md:pl-0 pl-4">
            <svg
              id="contact-logo"
              className="contact-logo"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1281.08 440.07"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#fff;}" }}
                />
              </defs>
              <path
                className="cls-1"
                d="M488.42,193.54l37-23c7.47,15.87,22.08,26.33,40.77,26.33,15.63,0,25.15-7.42,25.15-18.56,0-35.45-94.13-18.91-94.13-87.77,0-40.5,33-59.75,65.24-59.75a83.71,83.71,0,0,1,62.87,28.7L595.45,87.88c-10.19-11.14-21.74-17.55-33.3-17.55-10.87,0-19.7,5.4-19.7,16.87,0,35.11,93.77,16.55,93.77,91.48,0,37.81-32.27,60.09-70.33,60.09C530.21,238.77,501.67,218.85,488.42,193.54Z"
              />
              <path
                className="cls-1"
                d="M798.33,168.56c0,39.15-29.56,70.21-66.93,70.21-15.64,0-28.55-5.4-38.74-14.51v93.16l-43.49-.34V101l43.49.34v11.48c10.19-9.11,23.1-14.52,38.74-14.52C768.77,98.34,798.33,129.4,798.33,168.56Zm-43.15,0a32.28,32.28,0,1,0-32.28,32.06A31.94,31.94,0,0,0,755.18,168.56Z"
              />
              <path
                className="cls-1"
                d="M804.46,168.56c0-40.51,30.24-70.22,75.77-70.22s75.43,29.71,75.43,70.22-29.9,70.21-75.43,70.21S804.46,209.06,804.46,168.56Zm108,0c0-18.23-13.93-31.73-32.28-32.07-18.68.34-32.28,13.84-32.28,32.07s13.6,31.73,32.28,32.06C898.58,200.29,912.51,186.78,912.51,168.56Z"
              />
              <path
                className="cls-1"
                d="M1021.27,134.46v48.27c0,11.14,6.46,18.23,15.63,18.23h16.31v33.42c-3.4,2.36-12.58,4.39-21.75,4.39-28.88,0-53.34-22.28-53.34-51V134.46H955.35V101h22.77v-52h43.15v52h32.28v33.42Z"
              />
              <path
                className="cls-1"
                d="M1064.09,54.8a23.79,23.79,0,1,1,23.79,23.63A23.78,23.78,0,0,1,1064.09,54.8Zm2,46.24h43.16v135h-43.16Z"
              />
              <path
                className="cls-1"
                d="M1223.12,168.9l57.42,67.17h-52l-31.25-36.8L1166,236.07h-52.33l57.42-67.51L1113.71,101h51.64L1197,138.18,1228.55,101h52Z"
              />
              <path
                className="cls-1"
                d="M390.18.19H45.5a45.05,45.05,0,0,0-45,45.14V394.74a45.05,45.05,0,0,0,45,45.14H390.18a45.05,45.05,0,0,0,45-45.14V45.33A45.05,45.05,0,0,0,390.18.19Zm-31.86,393L267,300.77a120,120,0,0,1-66.3,20C133.47,320.73,79,265.62,79,197.63S133.47,74.54,200.66,74.54s121.67,55.11,121.67,123.09a123.45,123.45,0,0,1-19.73,67.08L394,357.13Z"
              />
              <ellipse
                className="cls-1"
                cx="200.66"
                cy="197.63"
                rx="74.17"
                ry="75.04"
              />
              <path
                className="cls-1"
                d="M899.41,367.33H896V387.7h3.39c5,0,8.81-4.4,8.81-10.18S904.36,367.33,899.41,367.33Z"
              />
              <path
                className="cls-1"
                d="M651,367.56c-5.27,0-9.28,4.34-9.28,10s4,10,9.28,10,9.34-4.34,9.34-10S656.28,367.56,651,367.56Z"
              />
              <polygon
                className="cls-1"
                points="1007.01 381.81 1015.04 381.81 1011.02 368.55 1007.01 381.81"
              />
              <path
                className="cls-1"
                d="M504.26,315.15V439.88H1234V315.15Zm73.32,79.51a13.24,13.24,0,0,1-11.89-7.46l5.69-3.78a6.76,6.76,0,0,0,6.25,4.34c2.4,0,3.86-1.23,3.86-3.06,0-5.85-14.44-3.12-14.44-14.48,0-6.67,5.06-9.85,10-9.85a12.46,12.46,0,0,1,9.65,4.74l-4.59,4.67c-1.56-1.84-3.33-2.9-5.11-2.9a2.72,2.72,0,0,0-3,2.79c0,5.79,14.4,2.72,14.4,15.08C588.38,391,583.43,394.66,577.58,394.66Zm37.11-14h-6.42v13.53h-6.88v-33.4h13.3c5.27,0,9.34,4.51,9.34,10.07S620,380.69,614.69,380.69Zm36.27,14c-8.87,0-16.07-7.68-16.07-17.14s7.2-17.15,16.07-17.15S667,368.06,667,377.52,659.88,394.66,651,394.66Zm49.14-27.33h-7.87v26.89h-6.84V367.33h-7.92v-6.51H700.1Zm40,26.89h-6.89v-33.4h6.89Zm34.4-26.89h-7.88v26.89h-6.83V367.33h-7.92v-6.51h22.63Zm52,26.89-1.94-6.29H812.8l-1.93,6.29h-7.35l11.27-33.4h7.71l11.27,33.4Zm47.79,0h-7.1l-15.33-22.16v22.16H844.9v-33.4H852l15.39,22.1v-22.1h6.83Zm25.25,0H889.14v-33.4h10.32c8.61,0,15.65,7.46,15.65,16.7S908.07,394.22,899.46,394.22Zm85.33,0h-6.88V374.34l-8.51,19.88h-4L957,374.29v19.93h-6.88v-33.4h7.45l9.86,23.1,10-23.1h7.41Zm34,0-1.93-6.29h-11.69l-1.92,6.29H995.9l11.27-33.4h7.72l11.27,33.4Zm38,0L1045.15,379h-1v15.26h-6.88v-33.4h6.88v11.8h1.2l10.23-11.8h8.87L1051,375.68,1066,394.22Zm39-26.94h-11.94v7h10.21v6.46h-10.21v7h11.94v6.46H1077v-33.4h18.83Zm42.35,26.94h-6.89v-33.4h6.89Zm34.41-26.89h-7.88v26.89h-6.83V367.33h-7.93v-6.51h22.64Z"
              />
              <path
                className="cls-1"
                d="M613.59,367.28h-5.32v7.34h5.32a3.67,3.67,0,1,0,0-7.34Z"
              />
              <polygon
                className="cls-1"
                points="814.63 381.81 822.66 381.81 818.64 368.55 814.63 381.81"
              />
            </svg>
          </a>
          </Link>
        </nav>

        <section className=" h-screen ">
          <div className="grid lg:grid-cols-2 grid-cols-1 h-full overflow-hidden ">
            <div className="contact-left lg:block hidden ">
              <div className="contact-l-content text-white">
                <h6 className="2xl:text-5xl text-3xl font-black text-center mx-auto">
                  GET IN TOUCH
                </h6>
                <p className="text-xs text-center mb-8">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
                <div className="xl:flex  justify-between">
                  <a className="flex items-center justify-center pb-4">
                    <svg
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-telephone-fill mr-2 text-2xl text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                    +91 9123456789
                  </a>
                  <a className="flex items-center justify-center pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28.455"
                      height="22.764"
                      viewBox="0 0 28.455 22.764"
                    >
                      <path
                        id="Icon_material-mail"
                        data-name="Icon material-mail"
                        d="M28.61,6H5.846A2.842,2.842,0,0,0,3.014,8.846L3,25.919a2.854,2.854,0,0,0,2.846,2.846H28.61a2.854,2.854,0,0,0,2.846-2.846V8.846A2.854,2.854,0,0,0,28.61,6Zm0,5.691L17.228,18.8,5.846,11.691V8.846l11.382,7.114L28.61,8.846Z"
                        transform="translate(-3 -6)"
                        fill="#fff"
                      />
                    </svg>
                    spotix@gmail.co
                  </a>
                </div>
              </div>
              <div className="social">
                <p className="text-center text-xl font-bold mb-4 text-white">
                  Follow Us
                </p>
                <Social />
              </div>
            </div>
            <div className="contact-right 2xl:p-28 xl:p-20 lg:p-16 pt-32 p-10 overflow-auto ">
              <ContactForm />

              <div className="social lg:hidden block pt-16">
                <p className="text-center text-xl font-bold mb-4 text-gray-800">
                  Follow Us
                </p>
                <Social />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
