import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";

const DesktopIcons = () => {
  const [isActiveDiscord, setIsActiveDiscord] = useState(false);
  const [isActiveTwitter, setIsActivetwitter] = useState(false);
  const [isActiveRoadmap, setIsActiveRoadmap] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/#roadmap") {
      setShowRoadmap(true);
    }
  }, [router.asPath]);
  return (
    <div className="pt-10 pointer-events-auto grid grid-cols-12 gap-4 items-center">
      <div className="-mt-4 flex flex-col items-center">
        <div
          className="flex flex-col items-center justify-center w-full my-4"
          onMouseOver={() => setIsActivetwitter(true)}
          onMouseOut={() => setIsActivetwitter(false)}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/2094Memories"
          >
            <img
              src="/images/twitter.png"
              className={`${
                !isActiveTwitter ? "block" : "hidden"
              } w-16 ml-2.5 mb-3`}
            />
            <img
              src="/images/twitteractive.png"
              className={`${
                !isActiveTwitter ? "hidden" : "block"
              } w-16 ml-2.5 mb-3`}
            />
            <p
              className={`${
                !isActiveTwitter ? "" : "bg-icons-painted-text"
              } text-white text-xl text-center break-words w-full font-RobotoMono`}
            >
              Twitter
            </p>
          </a>
        </div>
        <div
          className="flex flex-col items-center justify-center w-full my-4"
          onMouseOver={() => setIsActiveDiscord(true)}
          onMouseOut={() => setIsActiveDiscord(false)}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/ERgqvS2pmf"
          >
            <img
              src="/images/discord.png"
              className={`${
                !isActiveDiscord ? "block" : "hidden"
              } w-16 ml-2.5 mb-3`}
            />
            <img
              src="/images/discordactive.png"
              className={`${
                !isActiveDiscord ? "hidden" : "block"
              } w-16 ml-2.5 mb-3`}
            />
            <p
              className={`${
                !isActiveDiscord ? "" : "bg-icons-painted-text"
              } text-white text-xl text-center break-words w-full font-RobotoMono`}
            >
              Discord
            </p>
          </a>
        </div>
        {(router.asPath === "/#roadmap" || showRoadmap) && (
          <a
            onClick={() => {
              !(router.asPath === "/#roadmap") ? router.push("#roadmap") : "";
            }}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex flex-col items-center w-full my-4 ml-1 cursor-pointer"
              onMouseOver={() => setIsActiveRoadmap(true)}
              onMouseOut={() => setIsActiveRoadmap(false)}
            >
              <img
                src="/images/text.png"
                className={`${
                  !isActiveRoadmap ? "block" : "hidden"
                } w-13 mr-2 pb-3`}
              />
              <img
                src="/images/textactive.png"
                className={`${
                  !isActiveRoadmap ? "hidden" : "block"
                } w-13 mr-2 pb-3`}
              />
              <p
                className={`${
                  !isActiveRoadmap ? "" : "bg-icons-painted-text"
                } text-white text-xl text-center break-words w-full font-RobotoMono`}
              >
                Roadmap.txt
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default DesktopIcons;
