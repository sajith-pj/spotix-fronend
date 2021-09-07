import React from "react";

const PortfolioWorks = ({ work }) => {
  return (
    <div className="  w-full grid grid-cols-1 md:grid-cols-2 ">
      {work.left ? (
        <>
          <div className=" h-full  ">
            <img src={work.thumbnail} alt="" />
          </div>
          <div className=" h-full flex justify-center items-center p-24">
            <div className="flex justify-center items-center flex-col" style={{ width: "100%", height: "250px" }}>
              <img src={work.logo} alt="" srcset="" />
              <div className="p-3">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className=" h-full flex justify-center items-center p-24">
            <div className="flex justify-center items-center flex-col" style={{ width: "100%", height: "250px" }}>
              <img src={work.logo} alt="" srcset="" />
              <div className="p-3">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
          <div className=" h-full  ">
            <img src={work.thumbnail} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioWorks;
