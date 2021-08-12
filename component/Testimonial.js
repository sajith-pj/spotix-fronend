import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

class Testimonial extends Component {
  render() {
    return (
      <>
        <Carousel        
          responsive={responsive}
          ssr={true}      
          additionalTransfrom={0}
          arrows         
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          showDots
          className=""         
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          <div>
            <section className="testimonial lg:py-36 py-24">
              <div className="xl:w-6/12 w-10/12 text-center mx-auto">
                <img className="mx-auto" src="img/user.png" alt="user" />
                <blockquote className="md:text-xl text-lg font-light mt-4">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
                </blockquote>
                <h5 className="md:text-2xl text-xl font-extrabold mt-3">
                  JOHN DOE
                </h5>
              </div>
            </section>
          </div>

          <div>
            <section className="testimonial lg:py-36 py-24">
              <div className="xl:w-6/12 w-10/12 text-center mx-auto">
                <img className="mx-auto" src="img/user.png" alt="user" />
                <blockquote className="md:text-xl text-lg font-light mt-4">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
                </blockquote>
                <h5 className="md:text-2xl text-xl font-extrabold mt-3">
                  JANE DOE
                </h5>
              </div>
            </section>
          </div>

          <div>
            <section className="testimonial lg:py-36 py-24">
              <div className="xl:w-6/12 w-10/12 text-center mx-auto">
                <img className="mx-auto" src="img/user.png" alt="user" />
                <blockquote className="md:text-xl text-lg font-light mt-4">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum."
                </blockquote>
                <h5 className="md:text-2xl text-xl font-extrabold mt-3">
                  DOE
                </h5>
              </div>
            </section>
          </div>
        </Carousel>
      </>
    );
  }
}

export default Testimonial;
