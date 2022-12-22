import React from 'react'
import miembro from '../../src/assets/superwork-miembros.png'
import cuadro1 from '../../src/assets/superwork-01.png'
import cuadro2 from '../../src/assets/superwork-02.png'
import cuadro3 from '../../src/assets/superwork-03.png'

function Miembro() {
  return (
    <div id='miembro' className='container mx-auto flex max-sm:grid'>
        <div className='w-1/2 mt-24 py-4 flex justify-center max-sm:hidden'>
            <img src={miembro} alt="Miembro de Superwork" />
        </div>
        <div className='w-1/2 md:mt-24 max-sm:w-full max-sm:px-10'>
            <h3 className='uppercase mt-20 py-4 max-sm:text-lg text-2xl text-[#00AFB9] font-ProductSansBold'>
                ¿Por qué ser miembro?
            </h3>
            <h2 className='max-sm:text-3xl text-5xl tracking-wide font-ProductSansBold leading-tight'>
                Alcanzá la <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">libertad</span> que deseas
            </h2>
            <p className="text-xl max-sm:text-lg mt-6 mb-6 leading-loose font-ProductSansRegular text-[#464646]">
                En Superwork creemos en la libertad y autonomía que te otorga elegir tu lugar y horario de trabajo. Por eso creamos un espacio colaborativo que permite conectarte con otras personas en quienes apoyarte y de quienes aprender para potenciar y desarrollar tus habilidades y proyectos.
            </p>
            <div className='flex justify-center md:hidden'>
                <img src={miembro} alt="Miembro de Superwork" />
            </div>
            <div className='flex font-ProductSansBold max-sm:grid'>
                <div className='flex pr-12 text-lg max-sm:mt-7'>
                    <img src={cuadro1} alt="Trabajá" />
                    <p className='pl-4 grid content-center'>Trabajá</p>
                </div>
                <div className='flex pr-12 text-lg max-sm:mt-7'>
                    <img src={cuadro2} alt="Divertite" />
                    <p className='pl-4 grid content-center'>Divertite</p>
                </div>
                <div className='flex pr-12 text-lg max-sm:mt-7'>
                    <img src={cuadro3} alt="Expresate" />
                    <p className='pl-4 grid content-center'>Expresate</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Miembro