import React from 'react'

const Link = (props) => {
  return (
    <a href="#services" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100">{props.children}
    </a>
  )
}

export default Link
