import React from 'react'

function Beneficios() {
  return (
    <div>
        <div className='container mx-auto'>
            <h3 className='uppercase mt-24 py-4 max-sm:text-xl text-2xl text-[#00AFB9] font-ProductSansBold text-center'>Beneficios</h3>
            <h2 className='text-5xl max-sm:text-3xl 2xl:ml-96 md:ml-80 md:w-2/4 max-sm:m-auto text-center tracking-wide font-ProductSansBold leading-tight'>Obtené las mejores ventajas de ser freelance en nuestro espacio</h2>
        </div>

        <div className='container mx-auto flex max-sm:grid md:gap-20 justify-center pt-8 pb-20 '>
            <div className='bg-white w-80 h-96 border border-black rounded-xl mt-10 sombra'>
                <div className='w-full text-center px-8 mt-8'>
                    <img className='w-20 m-auto pt-4' src="./src/assets/icon.png" alt="" />
                    <h4 className='text-2xl font-ProductSansBold mt-5'>Independencia</h4>
                    <p className='text-lg font-ProductSansRegular mt-5'>Libertad de trabajar desde dónde y cuando quieras.</p>
                </div>      
            </div>
            <div className='bg-white w-80 h-96 border border-black rounded-xl mt-10 sombra'>
                <div className='w-full text-center px-8 mt-8'>
                    <img className='w-20 m-auto pt-4' src="./src/assets/icon2.png" alt="" />
                    <h4 className='text-2xl font-ProductSansBold mt-5'>Conectá con profesionales</h4>
                    <p className='text-lg font-ProductSansRegular mt-5'>Conocé nuevas personas, colaborá en proyectos y obtené nuevos clientes.</p>
                </div>
            </div>

            <div className='bg-white w-80 h-96 border border-black rounded-xl mt-10 sombra'>
                <div className='w-full text-center px-8 mt-8'>
                    <img className='w-20 m-auto pt-4' src="./src/assets/icon3.png" alt="" />
                    <h4 className='text-2xl font-ProductSansBold mt-5'>Impulsá tu negocio</h4>
                    <p className='text-lg font-ProductSansRegular mt-5'>Compartí tus ideas y generá oportunidades de trabajo e innovación.</p>
                </div>
            </div>
        </div>

        <div className='container mx-auto grid md:grid-cols-4 md:justify-items-center '>
            <div className='grid'>
                <div className='py-4 max-sm:py-1'>
                   <span className='text-[#FBBCF1] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Eventos</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#FBBCF1] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Co-creación de proyectos</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#FBBCF1] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Salas de chat</span>
                </div>
            </div>
            <div className='grid'>
                <div className='py-4 max-sm:py-1'>
                <span className='text-[#FFBA67] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Workshops</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#FFBA67] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Visibilidad de tus servicios</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#FFBA67] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Recursos útiles</span>
                </div>
            </div>
            <div className='grid'>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#B1E2E5] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Socios</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#B1E2E5] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Ayuda y soporte</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#B1E2E5] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Livestream en Discord</span>
                </div>
            </div>
            <div className='grid'>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#F4CECB] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Foros temáticos</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#F4CECB] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Diversión</span>
                </div>
                <div className='py-4 max-sm:py-1'>
                    <span className='text-[#F4CECB] px-5'><i class="fa-solid fa-circle"></i></span><span className='font-ProductSansBold text-lg'>Experiencias</span>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Beneficios