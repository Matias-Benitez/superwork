import React from 'react'

function Beneficios() {
  return (
    <div>
        <div className='container mx-auto'>
            <h3 className='uppercase mt-24 py-4 text-2xl text-[#00AFB9] font-ProductSansBold text-center'>Beneficios</h3>
            <h2 className='text-5xl tracking-wide font-ProductSansBold leading-tight text-center mb-24'>Obtené las mejores ventajas <br /> de ser freelance en <br /> nuestro espacio</h2>
        </div>
        <div>
            <div className='w-full flex justify-center mt-20 mb-20 '>
                <img src="./src/assets/beneficios.png" alt="" />
            </div>
            <div className='w-full flex justify-center mt-20 mb-20 '>
                <img src="./src/assets/funciones.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Beneficios