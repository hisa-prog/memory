import { useRouter } from "next/dist/client/router";
import React from "react";
import Draggable from "react-draggable";
import Cross from "../public/images/cross";
import Rolup from "../public/images/rolup";
import Window from "../public/images/window";

export default function Reception() {
  const router = useRouter();
  return (
    <Draggable handle="strong">
      <div className="lg:col-start-3 lg:col-span-8 lg:px-0 col-span-2 px-4 flex justify-center items-center pointer-events-none md:pointer-events-auto">
        <div className="flex justify-center items-center max-w-reception">
          <div className="h-auto bg-light-gray shadow-def">
            <strong>
              <div className="flex justify-between m-1 p-1 dark-blue text-white items-center">
                <div className="lg:flex items-center hidden">
                  <img
                    className="mr-1 pointer-events-none"
                    src="/images/2094.png"
                    alt=""
                    style={{ height: "20px", width: "20px" }}
                  />
                  <p className="lg:text-xl font-normal font-RobotoMono">
                    Reception
                  </p>
                </div>
                <div className="flex items-center lg:hidden">
                  <img
                    className="mr-1 ml-0.5 pointer-events-none p-0.5"
                    src="/images/2094.png"
                    alt=""
                    style={{ height: "23px", width: "22px" }}
                  />
                  <p className="text-sm font-normal font-RobotoMono -mb-0.5">
                    Reception
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
            <div className="">
              <div className="lg:ml-11">
                <p className="lg:text-5xl text-3xl text-center md:ml-4 lg:mt-2 md:text-left font-bold font-RobotoMono mt-3">
                  Welcome to <br className="md:hidden block" />
                  Memories 2094
                </p>
              </div>
              <div className="md:flex mt-5">
                <div className="">
                  <div className="lg:mb-11 lg:ml-11 lg:mr-0 ml-3 mr-3 p-1 shadow-push">
                    <img
                      className=""
                      src="/images/man.gif"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:justify-between md:w-10/12 lg:mx-12 mx-3 md:mt-0 mt-4">
                  <p className="xl:text-2xl md:text-xl lg:text-base text-lg leading-5 font-RobotoMono lg:mb-0 mb-4 lg:block hidden">
                    Memories 2094 is the first DAO that purchases Solana
                    bluechip NFTs, such as
                    {
                      <span className="text-main-blue">
                        {" "}
                        Degenerate Ape Academy
                      </span>
                    }
                    , Thugbirdz and virtual real estate. Investment objects will
                    be selected by vote of the community.
                  </p>
                  <p
                    className="xl:text-2xl md:text-xl lg:text-base text-lg leading-5 font-RobotoMono lg:mb-0 mb-4 lg:hidden"
                    style={{ lineHeight: "19px" }}
                  >
                    Memories 2094 is the first DAO that purchases Solana
                    bluechip NFTs, such as
                    {<p className="text-main-blue"> Degenerate Ape Academy,</p>}
                    Thugbirdz and virtual real estate. Investment objects will
                    be selected by vote of the community.
                  </p>
                  <div className="lg:flex flex-col space-y-6 pb-11 font-RobotoMono hidden mt-2">
                    <button className="shadow-def active:shadow-push py-3 text-2xl" onClick={() => {
                      router.push(`#road`);
                    }}>
                      <div className="hover:border-2 border-light-gray border-dashed mx-5 -my-1">
                        <p className="first-underline text-center hover:border-2 border-black border-dashed -my-1">
                        Roadmap
                        </p>
                      </div>
                    </button>
                    <button className="shadow-def active:shadow-push py-3 text-2xl ">
                      <div className="hover:border-2 border-light-gray border-dashed mx-5 -my-1">
                        <p className="first-underline hover:border-2 border-black border-dashed -my-1">
                          Mint
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-4 pb-7 font-RobotoMono lg:hidden pointer-events-auto">
                    <div className="flex justify-end cursor-pointer">
                      <a
                        className="shadow-def active:shadow-push text-center py-4 text-xl flex justify-center w-full"
                        href="https://twitter.com/2094Memories"
                      >
                        <p className="underline">T</p>witter
                      </a>
                    </div>
                    <div className="flex justify-end cursor-pointer">
                      <a
                        className="shadow-def active:shadow-push text-center py-4 text-xl flex justify-center w-full"
                        href="https://discord.gg/ERgqvS2pmf"
                      >
                        <p className="underline">D</p>iscord
                      </a>
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
}
