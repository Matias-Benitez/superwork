import React from 'react'

function Footer() {
  return (
    <div id='contacto' className='w-full h-auto bg-[#0081A7] mt-11 max-sm:px-6'>
      <div className='container mx-auto text-[#FDFCDC]'>
        <div className='text-5xl 2xl:text-6xl font-ProductSansBold py-16'>
        <a href="#" className="relative">
          superwork
        </a>
        </div>

        <div className='grid md:grid-cols-4 '>

         <div className='grid'>
            <div className='py-1 max-sm:py-1'>
              <span className='text-[#FDFCDC] text-lg px-2'><i class="fa-brands fa-instagram"></i></span><span className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg align-middle'>Instagram</span>
            </div>
            <div className='py-1 max-sm:py-1'>
              <span className='text-[#FDFCDC] text-lg px-2'><i class="fa-brands fa-square-facebook"></i></span><span className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg align-middle'>Facebook</span>
            </div>
            <div className='py-1 max-sm:py-1'>
              <span className='text-[#FDFCDC] text-lg px-2'><i class="fa-brands fa-twitter"></i></span><span className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg align-middle'>Twitter</span>
            </div>
            <div className='py-1 max-sm:py-1'>
              <span className='text-[#FDFCDC] text-lg px-2'><i class="fa-brands fa-linkedin"></i></span><span className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg align-middle'>LinkedIn</span>
            </div>
          </div>

          <div className='grid'>
            <div className='py-1 max-sm:py-6'>
              <h5 className='font-ProductSansBold text-2xl md:pb-4 max-sm:pb-2'>
                Contacto
              </h5>
              <p className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg '>
                soporte@superwork.com.ar
              </p>
            </div>
          </div>

          <div className='grid'>
            <div className='py-1 max-sm:pb-6'>
              <h5 className='font-ProductSansBold text-2xl md:pb-4 max-sm:pb-2'>
                Trabajá con nosotros
              </h5>
              <p className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg'>
                Enviá tu CV a: <br /> cv@superwork.com.ar
              </p>
            </div>
          </div>

          <div className='grid'>
            <div className='py-1 max-sm:pt-6'>
              <h5 className='font-ProductSansBold text-2xl md:pb-4 max-sm:pb-2'>
                Ubicación
              </h5>
              <p className='font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg'>
                Buenos Aires, Argentina
              </p>
            </div>
          </div>

        </div>

        

        <div className='border-t-2 border-[#FDFCDC] outline-8 mt-10 pb-12'>
            <div className='pt-4 font-ProductSansRegular text-sm max-sm:text-lg 2xl:text-lg align-middle'>
              © 2022 Superwork - Todos los derechos reservados
            </div>
        </div>

      </div>
        
    </div>
  )
}

export default Footer