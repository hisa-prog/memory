import React from "react";
import Draggable from "react-draggable";
import Cross from "../public/images/cross";
import Rolup from "../public/images/rolup";
import Window from "../public/images/window";
import { useRouter } from "next/dist/client/router";
import Image from "next/dist/client/image";

const Apocaly = () => {
  const router = useRouter();
  return (
    <Draggable handle="strong">
      <div
        className="flex lg:col-start-2 lg:col-span-10 col-span-2 lg:mt-0 mt-10 px-4 pointer-events-none md:pointer-events-auto justify-center items-center"
        id="linkAbout"
      >
        <div className="shadow-def bg-light-gray max-w-apocaly">
          <strong className="flex justify-between m-1 p-1 dark-blue text-white items-center">
            <div className="flex items-center">
              <img
                className="mr-1 pointer-events-none p-0.5 hidden lg:block"
                src="/images/book.png"
                alt=""
                style={{height: "32px", width: "32px"}}
              />
              <img
                className="mr-1 pointer-events-none p-0.5 lg:hidden block"
                src="/images/book.png"
                alt=""
                style={{height: "24px", width: "24px"}}
              />
              <p className="lg:text-xl text-sm font-normal lg:-mb-0 -mb-0.5 font-RobotoMono">ApocalyCLI</p>
            </div>
            <div className="flex">
              <div className="shadow-def bg-light-gray hidden p-1 lg:block">
                <Rolup />
              </div>
              <div className="shadow-def bg-light-gray hidden p-1 lg:block">
                <Window />
              </div>
              <div
                className="shadow-def active:shadow-push bg-light-gray hidden p-1.5 lg:block cursor-pointer"
                onClick={() => {
                  router.push("#empty");
                }}
              >
                <Cross />
              </div>
            </div>
          </strong>
          <div className="shadow-apocay flex m-1 lg:mr-3 mr-2 mb-1.5 pl-1">
            <div className="bg-black flex justify-between w-full">
              <div className="flex flex-col justify-between lg:w-9/12 w-full lg:pl-5 lg:pr-0 pl-3 pr-3">
                <div className="text-apocalySoft lg:text-xl text-base lg:mt-3 mt-3 font-RobotoMono lg:leading-6 leading-4">
                  <p>{`ApocalySoft<R> ApocalyOS`}</p>
                  <p className="ml-11 lg:block hidden">{`<C>Copyright ApocalySoft 2049-2061.`}</p>
                  <p className="lg:hidden block ml-9">{`<C>Copyright ApocalySoft`}</p>
                  <p className="lg:hidden block">{`2049-2061.`}</p>
                  <p>{`C: \ApocalyOS>ver`}</p>
                  <p>{`ApocalyOS.[Version 4.00.263]`}</p>
                  <p>{`C: \ApocalyOS> request &lore`}</p>
                  <p>{`//initializing protocol...`}</p>
                </div>
                <div className="text-white lg:text-xl text-base font-RobotoMono lg:leading-5 lg:pt-4 leading-4 pt-4">
                  <p>{`{{Memories 2094}} is a collection of generative hand drawn NFTs that describe the world after a nuclear war between decentralized and conservative countries.`}</p>
                  <p className="lg:mt-6 mr-7">
                    The collection functions as a key to a unique staking system
                    with evolving cards and a strong roadmap that offers holders
                    a new experience of interactivity.
                  </p>
                  <p className="lg:mt-6">{`//status confirmed`}</p>
                </div>
                <div className="lg:text-5xl md:text-4xl text-3xl greens lg:mt-16 lg:pb-6 lg:pt-0 pb-3 pt-11 font-anachronaut">
                  <p>Memories 2094</p>
                </div>
              </div>
              <div className="lg:flex justify-end min-h-full hidden">
                <div className="p-6 flex justify-end">
                  <img className="" src="/images/manLeft.png" alt="" style={{maxHeight: "28.75rem"}}/>
                </div>
                <div className="h-full flex justify-between flex-col cursor-pointer -mt-0.5 ">
                  <div className="shadow-menu pl-1.5 pr-2 w-8 h-8  bg-light-gray flex justify-center items-center">
                    <img className="" src="/images/arrow.svg" alt="" />
                  </div>
                  <div className="shadow-menu bg-light-gray h-full"></div>
                  <div className="shadow-menu pl-1.5 pr-2 w-8 h-8 -mb-0.5 bg-light-gray flex justify-center items-center">
                    <img
                      className="transform rotate-180"
                      src="/images/arrow.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default Apocaly;
