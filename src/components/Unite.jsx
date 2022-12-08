import React from 'react'
import Button from './Button'
import '../App.css'

function Unite() {
  return (
    <div className='container mx-auto w-full mt-20 '>
      <div className='grid justify-center max-sm:hidden '>
        <img src="./src/assets/unite.png" alt="" />
      </div>
      <div className='md:-mt-96 md:px-60 max-sm:p-8'>
      <h2 className='text-5xl max-sm:text-2xl text-center tracking-wide font-ProductSansBold leading-tight 2xl:pt-4'>Unite a nuestro espacio de <br /> coworking online y llevá tu negocio al siguiente nivel</h2>
      <div className='flex justify-center mt-16'>
      <Button>
        Unirme ahora
      </Button>
      </div>
      </div>

    </div>
  )
}

export default Unite