import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

class CourseCarousel extends Component {
  render() {
    return (
      <>
        <Carousel responsive={responsive}
          responsive={responsive}
          ssr={true}      
          additionalTransfrom={0}
          arrows={false}         
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}     
          infinite  
          >
          <div>
            <div className="carousel-item">
            <img src="img/uiux.webp" alt="uiux" />
            <div className="carousel-caption h-full text-white">
              <p className="xl:text-4xl lg:text-2xl text-xl font-light">
                Course on
              </p>
              <h6 className="xl:text-7xl lg:text-5xl text-3xl font-extrabold">
                UI UX Designing
              </h6>
              <button className="xl:w-52 w-36 xl:py-4 lg:py-3 py-2 px-6 mt-4 btn text-base font-medium">
                Know More
              </button>
            </div>
          </div>
          </div>

          <div>
             <div className="carousel-item">
            <img src="img/MERN2.webp" alt="uiux" />
            <div className="carousel-caption h-full text-white">
              <p className="xl:text-4xl lg:text-2xl text-xl font-light">
                Course on
              </p>
              <h6 className="xl:text-7xl lg:text-5xl text-3xl font-extrabold">
                MERN FULLSTACK DEVELOPMENT
              </h6>
              <button className="xl:w-52 w-36 xl:py-4 lg:py-3 py-2 px-6 mt-4 btn text-base font-medium">
                Know More
              </button>
            </div>
          </div>
          </div>
        </Carousel>
      </>
    );
  }
}

export default CourseCarousel;
