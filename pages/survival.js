import { useRouter } from "next/dist/client/router";
import React, { Fragment, useState } from "react";
import JoinPage from "../components/survival/joinPage";
import Draggable from "react-draggable";
import Roadmap from "./roadmap";
import Image from "next/image";
import Cross from "../public/images/cross";
import Rolup from "../public/images/rolup";
import Window from "../public/images/window";
import CrossBlock from "../public/images/crossblock";

const steps = [
  {
    img: "/images/explosion1.jpg",
    mobImg: "/images/explosion1.jpg",
    header: "1) Mint of 10 000 survivors",
    text: "No more, no less. After mint is completed 15% of the earnings will be stored in the DAO treasury.",
  },
  {
    img: "/images/explosion2.jpg",
    mobImg: "/images/explosion2.jpg",
    header: "2) The floor is on fire!",
    text: "100% of the creator royalties from secondary sales will be used to buy back the tokens that will be burned afterwards. This will continue until all unevolved tokens are burned.",
  },
  {
    img: "/images/explosion3.jpg",
    mobImg: "/images/explosion3.jpg",
    header: "3) Time to evolve ",
    text: "There will be a big community event that requires 2 tokens to take part. One basic token should be burned to let the second one pass. An Evolved token will function as a key pass to DAO, including a 3D avatar for metaverses with an upgraded rarity.",
  },
  {
    img: "/images/explosion4.jpg",
    mobImg: "/images/explosion4.jpg",
    header: "4) DAO creation",
    text: "Now it’s your turn. All holders of upgraded cards receive a vote token which allows them to take part in investment decisions based on the DAO treasury fund. Investments will be targeted to SOLana blue chip NFTs and virtual property.",
  },
  {
    img: "/images/explosion5.jpg",
    mobImg: "/images/explosion5.jpg",
    header: "5) Staking",
    text: "At this stage there will be an emission of our own community token secured by virtual DAO property.",
  },
  {
    img: "/images/explosion6.jpg",
    mobImg: "/images/explosion6.jpg",
    header: "6) Heal the world",
    text: "At this point we’ve created a strong financially stable DAO. It’s up to you, what we can achieve with this power.",
  },
];

const Survival = () => {
  const join = steps.length;
  const surv = steps.length + 1;
  const maxAmountPage = surv;

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const [loadingFinished, setLoadingFinished] = useState(false);

  function increment() {
    if (currentPage < maxAmountPage) {
      setCurrentPage((prevCounter) => {
        return prevCounter + 1;
      });
    }
  }

  function decrement() {
    if (currentPage > 0) {
      setCurrentPage((prevCounter) => {
        return prevCounter - 1;
      });
    }
  }

  if (currentPage === surv) return <Roadmap />;

  return (
    <Draggable handle="strong">
      <div className="lg:col-start-2 leading-4 lg:col-span-10 lg:px-0 col-span-2 lg:mt-0 mt-10 px-4 pointer-events-none md:pointer-events-auto flex justify-center items-center">
        <div
          className="shadow-def bg-light-gray w-full max-w-survival"
          id="linkRoadMap"
        >
          <strong>
            <div className="flex justify-between m-1 p-1 dark-blue text-white items-center">
              <div className="lg:flex items-center hidden">
                <img
                  className="mr-1 pointer-events-none p-0.5"
                  src="/images/map.png"
                  alt=""
                  style={{ width: "32px", height: "32px" }}
                />
                <p className="lg:text-xl text-sm font-normal font-RobotoMono lg:-mb-0 -mb-0.5">
                  R.O.A.D
                </p>
              </div>
              <div className="lg:hidden flex items-center">
                <img
                  className="mr-1 w-3/12 pointer-events-none p-0.5"
                  src="/images/map.png"
                  alt=""
                  style={{ width: "24px", height: "24px" }}
                />
                <p className="lg:text-xl text-sm font-normal font-RobotoMono lg:-mb-0 -mb-0.5">
                  R.O.A.D
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
                  className={`${
                    !(currentPage === join)
                      ? "cursor-pointer active:shadow-push"
                      : "cursor-default "
                  } shadow-def bg-light-gray hidden p-1.5 lg:block`}
                  onClick={
                    !(currentPage === join)
                      ? () => {
                          router.push("#empty");
                        }
                      : () => {}
                  }
                >
                  {!(currentPage === join) ? <Cross /> : <CrossBlock />}
                </div>
              </div>
            </div>
          </strong>
          <div className="p-4">
            {currentPage === join ? (
              <JoinPage {...{ setLoadingFinished }} />
            ) : (
              <div className="lg:flex grid">
                <div>
                  <p className="font-RobotoMono font-bold text-3xl block lg:hidden text-center mb-4">
                    Survival map
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="hidden lg:block">
                    {steps.map((item, index) => (
                      <>
                        {currentPage === index && (
                          <div className="shadow-push p-1">
                            <div
                              // src={item.img}
                              // alt="Picture of the author"
                              style={{ backgroundImage: `url(${item.img})`}}
                              className="bg-no-repeat bg-cover w-96 h-96 bg-center"
                            ></div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                  <div className="lg:hidden block w-full">
                    {steps.map((item, index) => (
                      <>
                        {currentPage === index && (
                          // <img className="w-full" src={item.mobImg} alt='' />
                          <div className="shadow-push p-1">
                            <img
                              src={item.mobImg}
                              alt="Picture of the author"
                            />
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
                <div className="lg:px-10 lg:w-12/12 w-full">
                  <p className="font-RobotoMono font-bold text-4xl lg:block hidden mb-5">
                    Survival map
                  </p>
                  <p className="font-RobotoMono font-normal lg:text-xl text-xl mt-4 leading-5">
                    Welcome to the Memories of Apacolypse 2094 - Survival map.
                    It will guide you through our journey. To continue, click
                    next.
                  </p>
                  <div className="font-RobotoMono lg:mt-6 mt-3 lg:space-y-1 lg:pl-6 pl-4 lg:ml-13">
                    {steps.map((item, index) => (
                      <>
                        <p
                          key={index + "h"}
                          className="font-bold text-lg flex lg:-mb-0 -mb-0.5"
                        >
                          {currentPage === index && (
                            <>
                              <img
                                className="transform rotate-90 -ml-6 mr-2"
                                src="/images/arrow.svg"
                                alt=""
                              />
                              {item.header}
                            </>
                          )}
                        </p>
                        {currentPage === index && (
                          <p
                            className="text-main-blue lg:text-sm text-base lg:mb-0 mb-0.5"
                            style={{ lineHeight: "19px" }}
                          >
                            {item.text}
                          </p>
                        )}
                        <p
                          key={index + "h"}
                          className="font-normal lg:text-base text-lg flex lg:mt-0 mt-0.25"
                        >
                          {currentPage != index && <div>{item.header}</div>}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="pointer-events-auto">
              <div className="lg:flex items-center hidden my-2">
                <div className="border-divider w-full"></div>
              </div>
              <div className="md:flex justify-end md:space-x-6 pt-4 lg:pt-1">
                <div className="flex space-x-8">
                  {currentPage !== 0 && !(currentPage === join) && (
                    <div
                      className="w-full flex lg:justify-end justify-start cursor-pointer"
                      onClick={decrement}
                    >
                      <a className="shadow-def active:shadow-push bg-light-gray md:py-1 py-4 w-28 md:w-44 text-center text-xl flex items-center justify-center font-RobotoMono">
                        <a className="flex items-center justify-center md:hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                          <img
                            className="mr-1 pt-0.5  transform -rotate-180 "
                            src="/images/vector.svg"
                            alt=""
                          />
                          <p className="lg:pl-1.5 pl-0.5 underline ">B</p>ack
                        </a>
                      </a>
                    </div>
                  )}
                  {currentPage !== join && (
                    <div
                      className="w-full flex justify-end cursor-pointer"
                      onClick={increment}
                    >
                      <a className="shadow-def active:shadow-push bg-light-gray md:py-1 py-4 w-28 md:w-44 md:h-12 text-center text-xl flex items-center justify-center font-RobotoMono">
                        <a className="flex items-center justify-center md:hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                          <p className="underline">N</p>ext
                          <img
                            className="lg:pl-1.5 pl-1 mr-1 pt-0.5"
                            src="/images/vector.svg"
                            alt=""
                          />
                        </a>
                      </a>
                    </div>
                  )}
                </div>
                {currentPage === join && (
                  <div className="md:flex md:justify-center">
                    <div className="md:flex md:space-x-6">
                      <div className="flex space-x-6">
                        <div className="lg:pt-5 w-full flex justify-end cursor-pointer">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://discord.gg/ERgqvS2pmf"
                            className="shadow-def active:shadow-push md:py-1 py-4 w-full md:w-44 md:h-12 text-center text-xl flex items-center justify-center first-underline font-RobotoMono"
                          >
                            <a className="flex items-center justify-center md:hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                              <p className="underline">D</p>iscord
                            </a>
                          </a>
                        </div>
                        <div className="lg:pt-5 w-full flex justify-end cursor-pointer">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/2094Memories"
                            className="shadow-def active:shadow-push md:py-1 py-4 w-full md:w-44 md:h-12 text-center text-xl flex items-center justify-center font-RobotoMono first-underline"
                          >
                            <a className="flex items-center justify-center md:hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                              <p className="underline">T</p>witter
                            </a>
                          </a>
                        </div>
                      </div>
                      <button
                        onClick={increment}
                        disabled={!loadingFinished}
                        className="w-button lg:pt-5 w-full flex mt-4 md:mt-0 lg:hidden"
                      >
                        <div
                          className={`${
                            loadingFinished ? "active:shadow-push" : ""
                          } shadow-def w-full md:py-1 py-4 md:w-44 md:h-12 text-center text-xl flex items-center justify-center first-underline font-RobotoMono`}
                        >
                          <a className="flex items-center justify-center md:hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                            <p className="underline">F</p>inish
                          </a>
                        </div>
                      </button>
                      <button
                        onClick={
                          !(currentPage === surv)
                            ? () => {
                                router.push("#roadmap");
                              }
                            : () => {}
                        }
                        disabled={!loadingFinished}
                        className="w-button lg:pt-5 w-full lg:flex mt-4 md:mt-0 hidden"
                      >
                        <div
                          className={`${
                            loadingFinished ? "active:shadow-push group" : ""
                          } shadow-def w-full md:py-1 py-4 md:w-44 md:h-12 text-center text-xl flex items-center justify-center first-underline font-RobotoMono`}
                        >
                          <a className="flex items-center justify-center md:group-hover:border-2 md:border-black md:border-dashed md:w-10/12 md:my-0.5">
                            <p className="underline">F</p>inish
                          </a>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default Survival;
