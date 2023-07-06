import { useRouter } from "next/dist/client/router"
import React, { Fragment, useEffect, useState } from "react"
import MenuItem from "../menuItem"
import OpenWindowPlate from "../openWindowPlate"

const menuItems = [
  {
    hash: "tokenomics",
    iconSrc: "/images/candles.png",
    text: "Tokenomics",
  },

  {
    hash: "about",
    iconSrc: "/images/book.png",
    text: "About",
  },

  {
    hash: "road",
    iconSrc: "/images/map.png",
    text: "R.O.A.D",
  },

  {
    hash: "reception",
    iconSrc: "/images/2094.png",
    text: "Reception",
  },
]

export const tabs = {
  tokenomics:  <OpenWindowPlate text="Tokenomics" src="/images/candles.png" />,
  about: <OpenWindowPlate text="ApocalyCLI" src="/images/book.png" />,
  road: <OpenWindowPlate text="Survival map" src="/images/map.png" />,
  reception: <OpenWindowPlate text="Reception" src="/images/2094.png" />,
  roadmap: <OpenWindowPlate text="Roadmap.txt" src="/images/text.png" />,
  empty: undefined,
}

const normalize = (value) => {
  let output = value.toString()

  while (output.length < 2) output = "0" + output

  return output
}

const Footer = () => {
  const [isShow, setIsShow] = useState(false)
  const [time, setTime] = useState(new Date())

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
    }, 60000)
  })

  return (
    <div className="flex flex-col w-full justify-between z-10">
      <div></div>
      <div className="">
        <div className="relative">
          {isShow && (
            <div
              className={`absolute shadow-menu bg-light-gray transform -translate-y-full -mb-2 w-auto isolate font-RobotoMono text-2xl pt-0.5 pb-1 pl-0.5 pr-1`}
            >
              {menuItems.map((item, index) => (
                <>
                  <MenuItem
                    key={item.text}
                    onClick={() => {
                      setIsShow(false)
                      router.push(`/#${item.hash}`)
                    }}
                    src={item.iconSrc}
                    text={item.text}
                  />
                  {index === 2 && (
                    <div className="w-full ">
                      <div className="w-full border-divider mr-1" style={{ zIndex: -1 }} />
                    </div>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-screen gray-color p-1 flex justify-between">
        <div className="flex py-1">
          <button
            onClick={() => {
              setIsShow((isShow) => !isShow)
            }}
            className={`${isShow ? "shadow-push" : "shadow-def"} px-3 flex items-center py-1`}
          >
            <img className="w-8 mr-2 p-0.5" src="/images/menu.png" alt="" />
            <p className="text-xl font-RobotoMono">Menu</p>
          </button>
          {tabs[router.asPath.replace("/#", "")]}
        </div>
        <div className="shadow-push px-5 my-1 flex items-center font-RobotoMono">
          <img className="w-5 mr-2" src="/images/sound.svg" alt="" />
          <p>
            {normalize(time.getHours())}:{normalize(time.getMinutes())}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer
