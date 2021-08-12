import { Component } from "react";
import RegistrationForm from "./RegistrationForm";

class Registration extends Component {
  render() {
    return (
      <section className="registration-sec" id="registration">
        <div className="registration-inner">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="xl:py-32 xl:px-28 lg:py-24 lg:px-20 md:py-16 py-8 pb-4 md:px-12 px-6">
              <h4 className="xl:text-7xl lg:text-6xl text-4xl font-extrabold">
                Get Perfect <br />
                Support <span className="font-light">for Your</span>
                Dream Job
              </h4>
              <div>
                <p className="flex items-start xl:text-2xl lg:text-lg text-base mt-10">
                  {" "}
                  <svg
                    className="mr-2 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="19.714"
                    height="19.714"
                    viewBox="0 0 19.714 19.714"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2={1}
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#ff6d6d" />
                        <stop offset={1} stopColor="#ff4495" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Icon_material-check-circle"
                      data-name="Icon material-check-circle"
                      d="M12.857,3a9.857,9.857,0,1,0,9.857,9.857A9.861,9.861,0,0,0,12.857,3ZM10.886,17.786,5.957,12.857l1.39-1.39L10.886,15l7.482-7.482,1.39,1.4Z"
                      transform="translate(-3 -3)"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                  You will be learning the industries top and needed
                  technologies with us
                </p>
                <p className="flex items-start xl:text-2xl lg:text-lg text-base  my-4">
                  {" "}
                  <svg
                    className="mr-2 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="19.714"
                    height="19.714"
                    viewBox="0 0 19.714 19.714"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2={1}
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#ff6d6d" />
                        <stop offset={1} stopColor="#ff4495" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Icon_material-check-circle"
                      data-name="Icon material-check-circle"
                      d="M12.857,3a9.857,9.857,0,1,0,9.857,9.857A9.861,9.861,0,0,0,12.857,3ZM10.886,17.786,5.957,12.857l1.39-1.39L10.886,15l7.482-7.482,1.39,1.4Z"
                      transform="translate(-3 -3)"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                  Perfect training to get the job that you wish to get
                </p>
                <p className="flex items-start xl:text-2xl lg:text-lg text-base  my-4">
                  {" "}
                  <svg
                    className="mr-2 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="19.714"
                    height="19.714"
                    viewBox="0 0 19.714 19.714"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        x2="0.5"
                        y2={1}
                        gradientUnits="objectBoundingBox"
                      >
                        <stop offset={0} stopColor="#ff6d6d" />
                        <stop offset={1} stopColor="#ff4495" />
                      </linearGradient>
                    </defs>
                    <path
                      id="Icon_material-check-circle"
                      data-name="Icon material-check-circle"
                      d="M12.857,3a9.857,9.857,0,1,0,9.857,9.857A9.861,9.861,0,0,0,12.857,3ZM10.886,17.786,5.957,12.857l1.39-1.39L10.886,15l7.482-7.482,1.39,1.4Z"
                      transform="translate(-3 -3)"
                      fill="url(#linear-gradient)"
                    />
                  </svg>
                  We values your money and quality tutoring will be provided
                </p>
              </div>
            </div>

            <RegistrationForm />
          </div>
        </div>
      </section>
    );
  }
}

export default Registration;
