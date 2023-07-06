import React, { useEffect, useState } from "react";
import Apocaly from "./apocaly";
import Layout from "../components/layout/layout";
import Reception from "./reception";
import Survival from "./survival";
import Empty from "./empty";
import { useRouter } from "next/dist/client/router";
import DesktopIcons from "../components/layout/desktopIcons";
import Footer from "../components/layout/footer";
import Tokenomics from "./tokenomics";
import smoothscroll from "smoothscroll-polyfill";
import Icon from "../components/Icon";
import Roadmap from "./roadmap";

export const pages = {
  reception: <Reception />,
  about: <Apocaly />,
  road: <Survival />,
  tokenomics: <Tokenomics />,
  empty: <Empty />,
  roadmap: <Roadmap />,
};

export const pagesHash = Object.keys(pages);

export default function Home() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const loadAllImages = async () => {
    const imageList = [
      "/images/2094.png",
      "/images/arrow.svg",
      "/images/book.png",
      "/images/bord.svg",
      "/images/candles.png",
      "/images/colors.jpg",
      "/images/discord.png",
      "/images/discordactive.png",
      "/images/explosion1.jpg",
      "/images/explosion2.jpg",
      "/images/explosion3.jpg",
      "/images/explosion4.jpg",
      "/images/explosion5.jpg",
      "/images/explosion6.jpg",
      "/images/graph.png",
      "/images/graph.svg",
      "/images/line.svg",
      "/images/manLeft.png",
      "/images/man.gif",
      "/images/menu.png",
      "/images/points.svg",
      "/images/sound.svg",
      "/images/stretch.png",
      "/images/text.png",
      "/images/textactive.png",
      "/images/titletokenomics.svg",
      "/images/tools.png",
      "/images/tools.svg",
      "/images/toolsMobile.svg",
      "/images/twitter.png",
      "/images/twitteractive.png",
      "/images/vector.svg",
      "/images/tokenomics.png",
      "/images/machine.gif",
      "/images/bulletproof.gif"
    ];
    const imagePromises = await imageList.map((src) => {
      return new Promise((res, rej) => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
          res(true);
        };
      });
    });
    await Promise.all(imagePromises);
    setLoaded(true);
  };
  useEffect(() => {
    smoothscroll.polyfill();
    loadAllImages();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  const checkWidth = () => {
    if (typeof window === "undefined") return;

    setIsMobile((prevValue) => window.innerWidth < 1024);
  };

  // const scrollToCurrent = () => {
  //   const target = document.getElementById(router.asPath.replace("/#", ""));

  //   if (window?.innerWidth < 1024) {
  //     if (target)
  //       setTimeout(
  //         () =>
  //           document.body.scrollTo({
  //             top: Math.max(0, target.offsetTop - 20),
  //             behavior: "smooth",
  //           }),
  //         10
  //       );
  //   }
  // };

  useEffect(() => {
    checkWidth();

    window.addEventListener("resize", checkWidth);

    // window.addEventListener("load", scrollToCurrent);

    return () => {
      window.removeEventListener("resize", checkWidth);
      // window.removeEventListener("load", scrollToCurrent);
    };
  }, []);

  useEffect(() => {
    if (!pages[router.asPath.replace("/#", "")] && !isMobile)
      router.push(`#reception`);
  });

  useEffect(() => {
    document.body.scrollTo({ top: 10, behavior: "smooth" });

    if (isMobile && document.location.hash === "#empty")
      router.push(`#reception`);
  }, [isMobile]);

  return (
    <>
      <React.Fragment>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1115656939173342');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1115656939173342&ev=PageView&noscript=1"
            />`,
          }}
        />
      </React.Fragment>
      {loaded ? (
        <div className={`w-full min-h-screen flex lg:grid flex-col justify-between lg:grid-rows-fr-max isolate font-W95FA ${!isMobile ? "bg-bg-main bg-no-repeat bg-cover" : ""}`}>
          <div className={`relative ${!isMobile ? "bg-bg-main-over bg-no-repeat bg-cover" : ""}`}>
            {!isMobile && <DesktopIcons />}
            <div className="lg:absolute h-full w-full top-0 left-0 lg:grid lg:grid-cols-12 items-center justify-center gap-4 lg:pointer-events-none pt-10 pb-8 z-10">
              <div className="grid grid-cols-3 gap-2 px-4 pb-4 col-span-2 lg:hidden">
                <div>
                  <a
                    className="flex justify-end cursor-pointer"
                    href="#linkAbout"
                  >
                    <a className="shadows shadow-def active:shadow-push py-3 w-full text-center text-base flex justify-center font-W95FA">
                      <p className="underline">A</p>bout
                    </a>
                  </a>
                </div>
                <div>
                  <a
                    className="flex justify-end cursor-pointer"
                    href="#linkTokenomics"
                  >
                    <a className="shadows shadow-def active:shadow-push py-3 w-full text-center text-base flex justify-center font-W95FA">
                      <p className="underline">T</p>okenomics
                    </a>
                  </a>
                </div>
                <div>
                  <a
                    className="flex justify-end cursor-pointer"
                    href="#linkRoadMap"
                  >
                    <a className="shadows shadow-def active:shadow-push py-3 w-full text-center text-base flex justify-center font-W95FA">
                      <p className="underline">R</p>.O.A.D
                    </a>
                  </a>
                </div>
              </div>
              {isMobile
                ? pagesHash.slice(0, 4).map((item) => (
                    <div key={item} id={item}>
                      {pages[item]}
                    </div>
                  ))
                : pages[router.asPath.replace("/#", "")]}
            </div>
            <div className="lg:hidden flex flex-col md:mt-1 bg-black">
              <div className="pointer-events-auto items-center">
                <div className="flex justify-center space-x-12">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://discord.gg/n5qMDcyd"
                  >
                    <Icon src="/images/discord.svg" name="Discord" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/2094Memories"
                  >
                    <Icon
                      src="/images/twitter.svg"
                      name="Twitter"
                      href="https://twitter.com/"
                    />
                  </a>
                </div>
              </div>
              <div className="text-4xl text-white pb-7 pt-11 flex justify-center font-anachronaut">
                <p>
                  Memories <br /> 2094
                </p>{" "}
                <br />
              </div>
            </div>
          </div>
          {!isMobile && <Footer />}
        </div>
      ) : (
        <div className={`w-full h-screen ${!isMobile ? "bg-bg-main bg-no-repeat bg-cover" : ""}`}></div>
      )}
    </>
  );
}
