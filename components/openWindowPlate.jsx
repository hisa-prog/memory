const OpenWindowPlate = ({ src, text }) => {
  return (
    <div className="shadow-push flex items-center p-2 ml-2 w-max font-RobotoMono">
      <img className="mr-1 w-5" src={src} alt="" />
      <p className="text-xl">{text}</p>
    </div>
  )
}

export default OpenWindowPlate
