import React from "react";

const TopHeader = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between py-3">
        <h5 className="font-bold text-3xl text-black">
          <span className="text-white">MOON</span>BOXES
        </h5>
        <div>
          <i class="bx bx-x text-3xl"></i>
        </div>
      </div>
      <div className="absolute  left-1/2 top-12 transform translate-x-[-50%] z-20 ">
        <ul className="flex items-center gap-3 lg:gap-5 justify-center p-3 bg-yellow-400 w-80 header-top">
          <li>
            <i class="bx bx-left-arrow-circle"></i>
          </li>
          <li>
            <i class="bx bxs-wallet-alt"></i>
          </li>
          <li>
            <i class="bx bxs-wallet-alt"></i>
          </li>
          <li>
            <i class="bx bx-time-five"></i>
          </li>
          <li>
            <i class="bx bx-info-circle"></i>
          </li>
          <li>
            <i class="bx bxs-disc"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopHeader;
