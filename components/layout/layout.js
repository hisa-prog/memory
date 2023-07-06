import React, { useState } from "react"
import DesktopIcons from "./desktopIcons"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col -mt-10 justify-between min-h-screen grid-rows-fr-max isolate font-W95FA">
      <div className="relative">
        <div className="hidden lg:block">
          <DesktopIcons />
        </div>
        <div className="absolute w-full top-0 left-0 grid lg:grid-cols-12 grid-cols-2 gap-4 pointer-events-none z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Layout
