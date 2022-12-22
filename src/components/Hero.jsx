import Button from "./Button";
import hero from '../../src/assets/superwork-chat.png'
function Hero() {

    return (
        <div className="2xl:container mx-auto flex max-sm:grid 2xl:pb-10">
            <div className="max-sm:w-full 2xl:w-auto md:w-11/12 max-sm:mt-10 mt-20 py-4 md:px-10 px-7 2xl:mt-32">
                <h1 className="max-sm:text-4xl text-6xl tracking-wide font-ProductSansBold leading-tight">
                    Unite al nuevo <br/>espacio de <br/>Coworking <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">Online</span>
                </h1>
                <p className="max-sm:text-xl text-2xl mt-6 mb-6 leading-loose font-ProductSansRegular text-[#464646]">
                    Una comunidad de freelancers y emprendedores que ampliará tus redes de contacto, facilitará tu trabajo y potenciará tu negocio.
                </p>
                <a href="#membresia">
                    <Button>
                        Unirme ahora 
                    </Button>
                </a>
            </div>
            <div className="max-sm:hidden py-4 md:px-10 px-7 ">
                <img className="w-screen" src={hero} alt="Chat superwork" />
            </div>
            
        </div>
    )
}

export default Hero;