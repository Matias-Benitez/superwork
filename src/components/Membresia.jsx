import React from 'react'
import Button from './Button'
import membresia from '../../src/assets/superwork-membresia.png'
import flecha from '../../src/assets/superwork-flecha.png'
import '../App.css'

function Membresia() {
  return (
    <>
        <div className='max-sm:w-10/12 container mx-auto flex bg-[#F07167] rounded-3xl mt-28 mb-28 max-sm:px-4'>
            <div className='w-1/2 md:ml-20 max-sm:w-full'>
                <div className='text-5xl max-sm:text-xl tracking-wide font-ProductSansBold leading-tight mt-12 max-sm:mt-8'>
                    Una membresía a la medida de tus necesidades
                </div>
                <div className='mt-12 max-sm:mt-8 max-sm:pb-8'>
                    <a href="#membresia">
                        <Button>Unirme ahora</Button>
                    </a>
                    <a href="#membresia"></a>
                </div>
                
            </div>
            <div className='w-1/2 flex justify-center mx-8 my-8 max-sm:hidden'>
                <img src={membresia} alt="Membresía a la medida en Superwork" />
            </div>
        </div>
            <div className='container mx-auto md:text-center max-sm:px-4'>
            <h2 className='text-5xl max-sm:text-4xl tracking-wide font-ProductSansBold max-sm:pl-4'>
                Superworkers es un estilo de vida <span className='text-9xl max-sm:text-5xl'>”</span>
            </h2>
            <div className='w-full h-32 flex justify-center max-sm:justify-start mt-20 mb-20 max-sm:pl-8'>
            <img  src={flecha} alt="Superwork un estilo de vida" />
            </div>
        </div>
    </>
  )
}

export default Membresia