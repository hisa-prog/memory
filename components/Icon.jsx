const Icon = ({src, name}) => {
    return(
        <div className="flex flex-col items-center w-full my-4">
          <img className="mb-3" src={src} alt="" />
          <p className="text-white text-icon-label text-center break-words w-full">
            {name}
          </p>
        </div>
    );
}

export default Icon