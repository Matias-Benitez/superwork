import React from 'react'

function Contenido() {
  return (
    <>
        <div className='container mx-auto flex max-sm:grid'>
        <div className='w-1/2 mt-24 py-4 flex justify-center px-8 max-sm:hidden'>
            <img src="./src/assets/cuadro1.svg" alt="" />
        </div>
        <div className='w-1/2 mt-12 max-sm:w-full max-sm:px-10'>
            <h2 className='text-5xl max-sm:text-3xl tracking-wide font-ProductSansBold leading-tight md:mt-24'>
                Accedé a <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">recursos</span> exclusivos
            </h2>
            <p className="text-xl max-sm:text-lg mt-6 mb-6 leading-loose font-ProductSansRegular">
                Los trabajadores independientes necesitan saber en dónde encontrar las mejores herramientas, recursos, oportunidades laborales y eventos online y presenciales. ¡El área de workshop de nuestra comunidad reúne todo esto en un solo lugar!
            </p>
            <div className='flex justify-center md:hidden'>
            <img src="./src/assets/cuadro1.svg" alt="" />
        </div>
        </div>
        
        </div>
        <div className='container mx-auto flex max-sm:grid'>
        <div className='w-1/2 md:mt-12 max-sm:w-full max-sm:px-10'>
            <h2 className='text-5xl max-sm:text-3xl tracking-wide font-ProductSansBold leading-tight mt-24'>
                Generá <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">conexiones</span> <br /> valiosas
            </h2>
            <p className="text-xl max-sm:text-lg mt-6 mb-6 leading-loose font-ProductSansRegular">
                Para conectarnos verdaderamente entre nosotros, nuestra comunidad necesita algo más que un espacio de trabajo. Por eso en Superwork encontrarás canales de comunicación sobre diferentes temáticas del mundo freelance y salas de chat, audio y video para poder relacionarnos mejor.
            </p>
        </div>
        <div className='w-1/2 md:mt-24 py-4 flex justify-center px-8 max-sm:w-full'>
            <img src="./src/assets/cuadro2.png" alt="" />
        </div>
        </div>
    </>
  )
}

export default Contenido
