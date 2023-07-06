import React from "react";
import Draggable from "react-draggable";
import Cross from "../public/images/cross";
import Rolup from "../public/images/rolup";
import Window from "../public/images/window";
import { useRouter } from "next/dist/client/router";

const Tokenomics = () => {
  const router = useRouter();
  return (
    <Draggable handle="strong">
      <div
        className="col-span-full lg:col-start-2 lg:col-span-10 px-4 mt-24 lg:px-0 lg:mt-0 pointer-events-none md:pointer-events-auto flex justify-center items-center"
        id="linkTokenomics"
      >
        <div className="flex h-full justify-center leading-4 items-center max-w-tokenomics">
          <div className="grid-rows-max-fr h-full w-full shadow-def p-1 bg-light-gray">
            <strong>
              <div className="flex handle justify-between m-0 p-1 dark-blue text-white items-center">
                <div className="flex items-center">
                  <img
                    className="mr-1 w-6 pointer-events-none p-0.5"
                    src="/images/candles.png"
                    alt=""
                  />
                  <p className="lg:text-xl text-sm font-normal font-RobotoMono">
                    Tokenomics
                  </p>
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
              </div>
            </strong>
            <div className="grid-rows-max-fr">
              <div className="hidden lg:flex space-x-6 p-2 font-RobotoMono">
                <p className="flex">
                  <p className="underline">F</p>ile
                </p>
                <p className="flex">
                  <p className="underline">E</p>dit
                </p>
                <p className="flex">
                  <p className="underline">V</p>iew
                </p>
                <p className="flex">
                  <p className="underline">I</p>mage
                </p>
                <p className="flex">
                  <p className="underline">C</p>olors
                </p>
                <p className="flex">
                  <p className="underline">H</p>elp
                </p>
              </div>
              <div className="lg:hidden flex mt-3 mb-4 justify-center items-center">
                <p className="text-3xl text-center font-bold font-RobotoMono">
                  We’re designed <br className="md:hidden block" />
                  to burn!
                </p>
              </div>
              <div className="pl-2 grid-rows-fr-max">
                <div className="lg:grid-cols-max-fr pr-2">
                  <div className="w-20 hidden lg:block">
                    <img src="/images/tools.png" className="pr-2" alt="" />
                  </div>
                  <div className="w-full grid-rows-fr-max shadow-paint-canvas">
                    <div className="grid-cols-fr-max">
                      <div className="bg-white h-auto w-auto block lg:flex lg:w-fullspace-x-6 ">
                        {/* <div className="w-full lg:w-6/12 p-4 lg:p-8 flex flex-col items-center">
                          <p className="text-3xl lg:text-5xl xl:text-paint-heading  text-main-green text-center">
                            We’re designed to burn!
                          </p>
                          <div className="lg:mt-17.5 px-5 py-5 border-box">
                            <p className="text-xl lg:text-3xl xl:text-paint-text">
                              1. Special burning mechanism <br /> that reduces
                              the amount of cards <br /> 2. Part of the proceeds
                              is used to <br /> sweep the floor burning <br />{" "}
                              the cheapest cards
                            </p>
                          </div>
                        </div> */}
                        <div className="lg:w-6/12 p-3 lg:p-2 flex flex-col justify-center lg:items-end md:items-center">
                          <div className="text-paint-label md:pr-5 lg:pl-16">
                            <div className=" md:justify-center">
                              <img
                                className="max-w-lg lg:w-10/12 w-full md:block hidden ml-8"
                                src="/images/titletokenomics.svg"
                                alt=""
                              />
                              <img
                                className="max-w-lg w-full md:mt-8"
                                src="/images/points.svg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="lg:w-6/12 p-3 lg:p-2 flex flex-col justify-center lg:items-start md:items-center">
                          <div className="text-paint-label md:pl-5">
                            <div className=" md:justify-center">
                              <img
                                className="max-w-lg lg:w-10/12 w-full"
                                src="/images/tokenomics.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden lg:flex justify-end">
                        <div className="h-full flex justify-between flex-col cursor-pointer">
                          <div className="shadow-menu pl-1.5 pr-2 w-8 h-8 flex justify-center items-center">
                            <img className="" src="/images/arrow.svg" alt="" />
                          </div>
                          <div className="shadow-menu h-full"></div>
                          <div className="shadow-menu pl-1.5 pr-2 w-8 h-8 flex justify-center items-center">
                            <img
                              className="transform rotate-180"
                              src="/images/arrow.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-full items-end">
                      <div className="w-full flex justify-between cursor-pointer">
                        <div className="shadow-menu pl-1.5 pr-2 w-8 h-8 flex justify-center items-center">
                          <img
                            className="transform -rotate-90"
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </div>
                        <div className="shadow-menu w-full"></div>
                        <div className="shadow-menu pl-1.5 pr-2 w-8 h-8 flex justify-center items-center">
                          <img
                            className="transform rotate-90"
                            src="/images/arrow.svg"
                            alt=""
                          />
                        </div>
                        <div className="w-8 h-8 cursor-default"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pr-2 pb-6 lg:p-0">
                  <div className="lg:hidden border-b-2 border-main-gray pb-4 mb-4">
                    <img
                      className="mt-2 lg:w-4/12 pr-3"
                      src="/images/toolsMobile.svg"
                      alt=""
                    />
                  </div>
                  <div className="lg:hidden border-b-2 border-white -mt-4"></div>
                  <img
                    className="mt-4 lg:w-4/12"
                    src="/images/colors.jpg"
                    alt=""
                  />
                  <div className="w-full mt-2 hidden lg:flex  pr-1 pb-0.5">
                    <div className="bg-tokenomics-gray shadow-tokenomics w-6/12 h-10"></div>
                    <div className="bg-tokenomics-gray shadow-tokenomics w-3/12 h-10"></div>
                    <div className="bg-tokenomics-gray shadow-tokenomics w-3/12 h-10"></div>
                    <div className="w-6 flex items-end ml-6">
                      <img
                        src="/images/stretch.png"
                        alt=""
                        height={5}
                        width={30}
                      />
                    </div>
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
export default Tokenomics;
