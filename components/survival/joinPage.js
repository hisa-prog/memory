import { React, useState, useEffect, useRef } from "react"

const margin = 2
const loadingBarWidth = 16 + 2 * margin

const JoinPage = ({ setLoadingFinished }) => {
  const [maxPerView, setMaxPerView] = useState(0)
  const [loadingBars, setLoadingBars] = useState([])
  const [progress, setProgress] = useState(0)

  const block = useRef()

  const onResize = () => {
    if (block.current === undefined) return

    // console.log({ of: block.current.offsetWidth, gbcr: block.current.getBoundingClientRect().width })
    const max = Math.floor(block.current.offsetWidth / loadingBarWidth)

    setMaxPerView(max)

    if (max <= loadingBars.length) return

    let temp = loadingBars
    while (temp.length < max) temp.push(1)

    setLoadingBars([...temp])
  }

  const load = () => {
    setProgress((prev) => {
      if (prev >= 1) {
        return 1
      }

      if (prev > 0.5 && prev < 0.6) onResize()

      setTimeout(load, 100)

      return Math.min(1, prev + 0.04)
    })
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (progress === 1) setLoadingFinished(true)
  }, [progress])

  useEffect(() => {
    onResize()
    setTimeout(onResize, 100)
    setTimeout(onResize, 300)

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <div 
      style={{maxWidth: "1596px", maxHeight: "866px"}}
      className="lg:col-start-2 lg:col-span-10 col-span-2 flex justify-center items-center">
        <div className="">
          <p className="text-center lg:text-5xl md:text-4xl text-3xl font-RobotoMono font-bold">
            Join our RADIOACTIVE community!
          </p>
          <div className="md:flex justify-between mt-5 space-x-20 hidden">
            <div className="px-40 img flex justify-center">
              <img className="w-full  mt-1" src="/images/machine.gif" alt="" style={{maxHeight: "350px"}}/>
            </div>
            <div className="px-40 img flex justify-center">
              <img className="w-full mt-1" src="/images/bulletproof.gif" alt="" style={{maxHeight: "350px"}} />
            </div>
          </div>
          <div className="flex justify-between mt-5 space-x-2 md:hidden">
            <div className="px-1 img flex justify-center">
              <img className="w-full mt-1" src="/images/machine.gif" alt="" style={{maxWidth: "400px"}} />
            </div>
            <div className="px-1 img flex justify-center">
              <img className="w-full mt-1" src="/images/bulletproof.gif" alt="" style={{maxWidth: "400px"}} />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 pointer-events-auto w-full">
            <p className="font-RobotoMono lg:text-2xl md:text-xl lg:mb-0 text-xs mb-2">
              Installing to: C:\Program Files\MEMORIES2094\Roadmap
            </p>
            <div
              ref={block}
              className="shadow-def load-box h-8 flex items-center px-1 lg:row-start-2 row-start-2 -mx-0.5 w-full overflow-x-hidden"
            >
              {loadingBars.map((item, index) => {
                if (index <= Math.floor(progress * maxPerView))
                  return <div key={index} className="h-6 w-4 bg-main-blue mx-0.5" />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default JoinPage
