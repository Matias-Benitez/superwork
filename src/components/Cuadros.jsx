import React from 'react'
import '../App.css'

function Cuadros1() {
  return (
    <div className='w-full cuadromd mx-auto grid grid-cols-2 max-sm:grid-cols-1 gap-20 p-20 '>
      <div className='grid md:justify-items-end max-sm:justify-center'>
        <div className='bg-white w-80 h-96 border border-black rounded-xl sombra'>
          <div className='w-full text-center px-8 mt-8'>
            <span className='text-4xl'><i class="fa-solid fa-headphones"></i></span>
            <h4 className='text-xl  font-ProductSansBold mt-5'>Lo que nos motiva</h4>
            <p className='text-m font-ProductSansRegular mt-5'>Crear una comunidad sana de freelancers y emprendedores que puedan interactuar entre sí en un coworking online. Favorecer un espacio de aprendizaje y desarrollo de nuestras profesiones, proyectos y negocios. Lograr la libertad para ser dueño/a de tu tiempo y de tu vida.</p>
          </div>
        </div>
        <div className='bg-white w-80 h-80 border border-black rounded-xl mt-10 sombra'>
            <div className='w-full text-center px-8 mt-8'>
            <span className='text-4xl'><i class="fa-solid fa-chart-line"></i></span>
            <h4 className='text-xl font-ProductSansBold mt-5'>Eventos y workshops</h4>
            <p className='text-m font-ProductSansRegular mt-5'>Realizamos eventos para tratar diferentes temáticas de interés. Poder compartir experiencias, dudas, problemáticas y conocimientos.</p>
          </div>
        </div>
      </div>
      <div className='grid justify-start md:mt-10 max-sm:justify-center max-sm:-mt-8'>
        <div className='bg-white w-80 h-80 border border-black rounded-xl sombra'>
            <div className='w-full text-center px-8 mt-8'>
            <span className='text-4xl'><i class="fa-solid fa-envelope-open-text"></i></span>
            <h4 className='text-xl font-ProductSansBold mt-5'>Superworkers</h4>
            <p className='text-m font-ProductSansRegular mt-5'>Ser freelance, trabajador remoto, emprendedor o profesional independiente es tener superpoderes, ya que demostramos día a día nuestras capacidades.</p>
          </div>
        </div>
        <div className='bg-white w-80 h-72 border border-black rounded-xl md:-mt-10 sombra max-sm:mt-12'>
            <div className='w-full text-center px-8 mt-8'>
            <span className='text-4xl'><i class="fa-solid fa-medal"></i></span>
            <h4 className='text-xl font-ProductSansBold mt-5'>Premiamos tus logros</h4>
            <p className='text-m font-ProductSansRegular mt-5'>Destacamos tus avances y logros. Regalamos un año gratis de membresía para el proyecto más votado.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cuadros1
