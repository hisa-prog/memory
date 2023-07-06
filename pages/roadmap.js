import React from "react";
import Draggable from "react-draggable";
import Cross from "../public/images/cross";
import Rolup from "../public/images/rolup";
import Window from "../public/images/window";
import { useRouter } from "next/dist/client/router";

const Roadmap = () => {
  const router = useRouter();
  return (
    <Draggable handle="strong">
      <div
        id="roadmap"
        className="flex lg:col-start-2 lg:col-span-10 col-span-2 px-4 mt-4 justify-center items-center pointer-events-none md:pointer-events-auto"
      >
        <div className="h-auto shadow-def bg-light-gray">
          <strong className="flex justify-between m-1 p-1 dark-blue text-white items-center">
            <div className="lg:flex items-center hidden">
              <img
                className="lg:mx-1 mr-1 pointer-events-none"
                src="/images/text.png"
                alt=""
                style={{ height: "22px", width: "18px" }}
              />
              <p className="text-xl font-normal font-RobotoMono">Roadmap.txt</p>
            </div>
            <div className="lg:hidden flex items-center">
              <img
                className="lg:mx-2 lg:mr-0 mr-1.5 pointer-events-none"
                src="/images/text.png"
                alt=""
                style={{ height: "20px", width: "17px" }}
              />
              <p className="text-sm font-normal font-RobotoMono -mb-0.5">Roadmap.txt</p>
            </div>
            <div className="flex">
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
            <div className="flex space-x-6 px-5 font-RobotoMono">
              <p className="flex">
                <p className="underline">F</p>ile
              </p>
              <p className="flex">
                <p className="underline">E</p>dit
              </p>
              <p className="flex">
                <p className="underline">S</p>earch
              </p>
              <p className="flex">
                <p className="underline">H</p>elp
              </p>
            </div>
            <div className="white lg:px-9 py-4 m-3 px-4 font-RobotoMono">
              <p className="text-main-blue lg:text-xl text-xl">
                1) Mint of 10 000 survivors
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile lg:-mt-1">
                No more, no less. After mint is completed 15% of the earnings
                will be stored in the DAO treasury.
              </p>
              <p className="text-main-blue lg:text-xl text-xl mt-1">
                2) The floor is on fire!
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile">
                100% of the creator royalties from secondary sales will be used
                to buy back the tokens that will be burned afterwards. <br />{" "}
                This will continue until all unevolved tokens are burned.
              </p>
              <p className="text-main-blue lg:text-xl mt-1 text-xl">
                3) Time to evolve
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile">
                There will be a big community event that requires 2 tokens to
                take part. One basic token should be burned <br />
                to let the second one pass. An Evolved token will function as a
                key pass to DAO, including a 3D avatar for metaverses <br />{" "}
                with an upgraded rarity.
              </p>
              <p className="text-main-blue lg:text-xl mt-1 text-xl">
                4) DAO creation
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile">
                Now it’s your turn. All holders of upgraded cards receive a vote
                token which allows them to take part in investment <br />{" "}
                decisions based on the DAO treasury fund. Investments will be
                targeted to SOLana blue chip NFTs and virtual property.
              </p>
              <p className="text-main-blue lg:text-xl mt-1 text-xl">
                5) Staking
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile">
                At this stage there will be an emission of our own community
                token secured by virtual DAO property.
              </p>
              <p className="text-main-blue lg:text-xl mt-1 text-xl">
                6) Heal the world
              </p>
              <p className="ml-5 lg:mr-5 lg:text-sm text-roadmapMobile lg:mb-1">
                At this point we’ve created a strong financially stable DAO.{" "}
                <br />
                It’s up to you, what we can achieve with this power.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
export default Roadmap;
