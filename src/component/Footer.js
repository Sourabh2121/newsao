import React from "react";

const Footer = () => {
  return (
    <>
      <div className="-mt-16 z-20 fixed w-11/12 bottom-7">
        <div className="flex lg:w-3/5 mx-auto">
          <div className="text-center custom-box custom-box-start text-yellow-400 flex-1">
            TIER
          </div>
          <div className="text-center custom-middle lg:py-5 bg-yellow-400 flex-1">
            MOONSHOT BALANCE
          </div>
          <div className="text-center custom-box custom-box-last text-yellow-400 flex-1">
            TOTAL NFTS
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
