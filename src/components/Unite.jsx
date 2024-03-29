import React from 'react'
import Button from './Button'
import unite from '../../src/assets/superwork-unite.png'
import '../App.css'

function Unite() {
  return (
    <div className='container mx-auto w-full mt-20 '>
      <div className='grid justify-center max-sm:hidden '>
        <img src={unite} alt="Unite a nuestro espacio" />
      </div>
      <div className='md:-mt-96 md:px-60 max-sm:p-8'>
      <h2 className='text-5xl max-sm:text-2xl text-center tracking-wide font-ProductSansBold leading-tight 2xl:pt-4 max-sm:hidden'>Unite a nuestro espacio de <br /> coworking online y llevá tu negocio al siguiente nivel</h2>
      <h2 className='text-5xl max-sm:text-2xl text-center tracking-wide font-ProductSansBold leading-tight 2xl:pt-4 md:hidden'>Unite a nuestro espacio de coworking online y llevá tu negocio al siguiente nivel</h2>
      <div className='flex justify-center mt-16'>
        <a href="#membresia">
          <Button>
          Unirme ahora
          </Button>
        </a>
      </div>
      </div>

    </div>
  )
}

export default Unite