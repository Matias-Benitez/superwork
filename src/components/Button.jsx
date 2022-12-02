import React from 'react'

const Button = (props) => {
  return (
    <button className='border border-black relative hover:bg-[#FFA63A] font-ProductSansRegular rounded-3xl -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#FFBA67] py-3 px-8 before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-8 before:border-black before:-z-10 before:transition-all before:rounded-3xl'>{props.children} →
    </button>
  )
}

export default Button
