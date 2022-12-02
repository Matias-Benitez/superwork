import React from 'react'
import Button from './Button'

function Membresia() {
  return (
    <>
        <div className='max-sm:w-10/12 container mx-auto flex bg-[#F07167] rounded-3xl mt-28 mb-28 max-sm:px-4'>
            <div className='w-1/2 md:ml-20 max-sm:w-full'>
                <div className='text-5xl max-sm:text-3xl tracking-wide font-ProductSansBold leading-tight mt-12 max-sm:mt-8'>
                    Una membresía a la medida de tus necesidades
                </div>
                <div className='mt-12 max-sm:mt-8 max-sm:pb-8'>
                    <Button>Ser miembro</Button>
                </div>
            </div>
            <div className='w-1/2 flex justify-center mx-8 my-8 max-sm:hidden'>
                <img src="./src/assets/membresia1.png" alt="" />
            </div>
        </div>
            <div className='container mx-auto md:text-center max-sm:px-4'>
            <h2 className='text-5xl max-sm:text-4xl tracking-wide font-ProductSansBold max-sm:pl-4'>
                Superworkes es un estilo de vida <span className='text-9xl max-sm:text-5xl'>”</span>
            </h2>
            <div className='w-full h-32 flex justify-center max-sm:justify-start mt-20 mb-20 max-sm:pl-8'>
            <img  src="./src/assets/flecha.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Membresia