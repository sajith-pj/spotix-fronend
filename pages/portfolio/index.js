import axios from "axios";
import { useEffect, useState } from "react";
import BlackNavbar from "../../component/BlackNavbar";
import PortfolioWorks from "../../component/PortfolioWorks";

const index = () => {
  const [works, setWorks] = useState([
    {
      thumbnail: "img/woop.png",
      logo: "img/woopy-logo.png",
      title: "UI Design",
      descriptoin: " lorem ipsum",
      left: true,
    },
    {
      thumbnail: "img/spott.png",
      logo: "img/spot-logo.png",
      title: "UI Design",
      descriptoin: " lorem ipsum",
      left: false,
    },
  ]);

  const getWorksData = () => {
    axios.get("http:localhost:3000/admin/works").then((response) => {
      if (response.data.works) {
        setWorks(response.data.works);
      }
    });
  };

  useEffect(() => {
    // getWorksData();
  }, []);

  return (
    <div className="portfolio-container ">
      <BlackNavbar />
      <div className="container mx-auto h-1/2 pt-24 flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-col mt-24">
          <h1 className="text-6xl">Portfolio</h1>
          <div className=" max-w-screen-lg flex justify-center items-center flex-col my-5 ">
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
            <p className="text-gray-400">
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua
            </p>
          </div>
        </div>

        <div className=" w-full flex justify-center items-center my-5 ">
          <div>
            <input type="radio" className="tab-btn" name="services" id="uiux" />
            <label htmlFor="uiux" className="tab-btn-label text-gray-500">
              {" "}
              UIUX{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="tab-btn"
              name="services"
              id="designing"
            />
            <label htmlFor="designing" className="tab-btn-label text-gray-500">
              {" "}
              Web Designing{" "}
            </label>
          </div>
          <div>
            <input type="radio" className="tab-btn" name="services" id="web" />
            <label htmlFor="web" className="tab-btn-label text-gray-500">
              Web Development
            </label>
          </div>
          <div>
            <input type="radio" className="tab-btn" name="services" id="app" />
            <label htmlFor="app" className="tab-btn-label text-gray-500">
              App Development
            </label>
          </div>
        </div>
      </div>
      <div className="mt-7">
        {works.map((work) => (
          <PortfolioWorks work={work} />
        ))}
      </div>
    </div>
  );
};


export default index;
