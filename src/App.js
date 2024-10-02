import "./App.css";
import Footer from "./component/Footer";
import "./index.css";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { useEffect, useState } from "react";
import Swipper from "./component/Swipper";
import ImageCarousel from "./component/Swipper";

function App() {
  const [imageSet, setImageSet] = useState([
    "/slide5.png",
    "/slide2.png",
    "/slide3.png",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSet.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageSet.length]);

  return (
    <>
      <div className="section-content bg-yellow-500 h-screen ps-3 md:ps-8 xl:ps-16 pr:3 md:pr-8 xl:pr-20">
        <div className="flex items-center justify-between py-3">
          <h5 className="font-bold text-xl lg:text-3xl text-black">
            <span className="text-white">MOON</span>BOXES
          </h5>
          <div>
            <i className="bx bx-x text-3xl"></i>
          </div>
        </div>
        <div className="absolute  left-1/2 top-12 transform translate-x-[-50%] z-20 ">
          <ul className="flex items-center gap-2 lg:gap-5 justify-center py-3 bg-yellow-500 px-6 lg:px-16 header-top">
            <li id="wallet">
              <i className="bx bx-left-arrow-circle"></i>
              <ReactTooltip id="wallet" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
            <li id="wallet2">
              <i className="bx bxs-wallet-alt"></i>
              <ReactTooltip id="wallet2" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
            <li id="wallet-alt">
              <i className="bx bxs-wallet-alt"></i>
              <ReactTooltip id="wallet-alt" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
            <li id="five">
              <i className="bx bx-time-five"></i>
              <ReactTooltip id="five" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
            <li id="info-circle">
              <i className="bx bx-info-circle"></i>
              <ReactTooltip id="info-circle" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
            <li id="disc">
              <i className="bx bxs-disc"></i>
              <ReactTooltip id="disc" place="top" effect="solid">
                hello world
              </ReactTooltip>
            </li>
          </ul>
        </div>

        <div className="bg-black  text-white ">
          <div className="h-[calc(100vh-90px)] overflow-auto items-center">
            <div className="h-full px-4 pe-12">
              <div className="pt-14 grid lg:grid-flow-col gap-4 xl:gap-32 w-full sm:w-11/12 md:w-9/12 xl:w-6/12 mx-auto items-center lg:h-full">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold border-t-4 border-b-2 py-6 border-yellow-500">
                    Buy MoonBoxes{" "}
                    <span className="text-yellow-500">
                      and expand your NFT collection
                    </span>
                  </h2>
                  <p className="pt-4">
                    Buying.MoonBoxes is a unique way to acquire NFTs and build
                    your collection.it is built on the Binance Smart Chain,
                    MoonRiver, Polygon, Etherenum and DogeChain. Only availble
                    on MoonBoxes.io
                  </p>
                  <div className="mt-6 flex gap-7 items-center">
                    <button className="bg-yellow-500 text-black font-bold text-sm rounded-full px-4 py-2">
                      Buy a MoonBox
                    </button>
                    <a href="#secondDiv">
                      <i className="bx bx-down-arrow-circle text-yellow-400 text-3xl"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src={imageSet[currentIndex]}
                    className="w-3/5 lg:w-full mx-auto transition-transform duration-500" // Add transition for smooth scaling
                    alt={`Slide ${currentIndex + 1}`}
                  />
                </div>
              </div>
              <div className="">
                <ImageCarousel />
              </div>
              <div
                className="grid lg:grid-flow-col gap-4 xl:gap-32 w-full sm:w-11/12 md:w-9/12 xl:w-6/12 mx-auto"
                id="secondDiv"
              >
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold border-t-4 border-b-2 py-6 border-yellow-500">
                    MoonBoxes.io <br />
                    <span className="text-yellow-500">
                      your base to purchase NFTS
                    </span>
                  </h2>
                </div>
                <div className="border-t-2 border-yellow-500">
                  <p className="pt-4 text-yellow-400">
                    <span className="text-white">MoonBoxes.io</span> offers you
                    a complete overview of upcoming, active and recent NFT
                    drops.
                  </p>
                  <p className="pt-3 lg:pt-6 text-yellow-400">
                    <span className="text-white">MoonBoxes.io</span> will be
                    home to collectors and amazing NFT artists.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-flow-col gap-4 xl:gap-32 w-full sm:w-11/12 md:w-9/12 xl:w-6/12 mx-auto items-center lg:h-full">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold border-t-4 border-b-2 py-6 border-yellow-500">
                    Call for artists! <br />
                    <span className="text-yellow-500">
                      Applications are open for all artists & creators
                    </span>
                  </h2>

                  <div className="mt-6 flex gap-3 flex-wrap">
                    <button className="border-b-2  border-yellow-500 text-white font-bold text-sm rounded-full px-4 py-2">
                      Contact Us
                    </button>
                    <button className="bg-yellow-500 text-black font-bold text-sm rounded-full gap-2 px-4 py-2 flex items-center">
                      <i className="bx bx-file-blank text-2xl"></i>
                      <span className=""> Application Form</span>
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src="astro_painter.png"
                    className="w-3/5 lg:w-full mx-auto"
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 h-screen border-l-2 border-stone-900 bg-yellow-500">
          <ul className="mode">
            <li>
              <i className="bx bx-wallet-alt text-2xl"></i>
            </li>
            <li className="writing-vertical-rl">Moonshot</li>
            <li className="writing-vertical-rl">MoonSea</li>
            <li className="writing-vertical-rl">Tokenomics</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
