import { Component } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Registration from "../../component/Registration";
import CourseCarousel from "../../component/CourseCarousel";
import Link from "next/link";
// import Router from "next/router";

class DebugIndia extends Component {

  render() {
    return (
      <>
        <Navbar />
        <CourseCarousel />
        <section className="db-grid">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <Link href="/mern-full-stack-development">  
            <a className="cursor-pointer">
            <div className="img-div md:m-5 md:mr-2 m-3 mb-1.5 relative">
              <img className="shadow-xl" src="img/fullstack.webp" alt="MERN" />
              <h6 className="xl:text-4xl lg:text-2xl text-lg font-extrabold text-white">
                MERN FULL STACK DEVELOPMENT
              </h6>
            </div>
            </a>
            </Link>
            <Link href="/uiux">  
            <a className="cursor-pointer">
            <div className="img-div md:m-5 md:ml-2 m-3 mt-1.5 relative">
              <img className="shadow-xl" src="img/uiux2.webp" alt="UIUX" />
              <h6 className="xl:text-4xl lg:text-2xl text-lg font-extrabold text-white">
                UI / UX DESIGNING
              </h6>
            </div>
            </a>
            </Link>
          </div>
        </section>

        <Registration />
        <Footer />
      </>
    );
  }
}

export default DebugIndia;
