import React from 'react'

function Colabora() {
  return (
    <div className='container mx-auto flex max-sm:grid'>
      <div className='w-1/2 md:mt-24 max-sm:px-10 max-sm:w-full'>
        <h2 className='max-sm:text-3xl max-sm:mt-16 text-5xl tracking-wide font-ProductSansBold leading-tight md:mt-24 '>
            Colaborá y desarrollá <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">aprendizajes</span> junto a otros
        </h2>
        <p className="text-xl max-sm:text-lg mt-6 mb-6 leading-loose font-ProductSansRegular">
            Conocé una comunidad que te brinda todo el apoyo que necesitás. En este espacio le vamos a dar voz a todos los miembros para que promocionen su trabajo o su proyecto, planteen dudas, compartan experiencias y festejen sus logros.
        </p>
      </div>
      <div className='w-1/2 md:mt-24 py-4 flex justify-center max-sm:px-10 max-sm:w-full'>
        <img src="./src/assets/colabora.png" alt="" />
      </div>
    </div>
  )
}

export default Colabora
