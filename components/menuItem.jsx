const MenuItem = ({ onClick, src, text, active }) => {
  return (
    <a
      className="flex items-center px-4 py-2 transition-all hover:bg-hover hover:text-white cursor-pointer m-0.5 mr-1 font-RobotoMono"
      onClick={onClick}
    >
      <img className="mr-2 w-13 h-13" src={src} alt="" />
      <p className="first-underline">
        {text[0]}
        <span>{text.slice(1, text.length)} </span>
      </p>
    </a>
  )
}

export default MenuItem
