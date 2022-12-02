import Button from "./Button";
function Hero() {

    return (
        <div className="container mx-auto flex max-sm:grid">
            <div className="max-sm:w-full w-1/2 max-sm:mt-10 mt-20 py-4 md:px-10 px-7">
                <h1 className="max-sm:text-4xl text-6xl tracking-wide font-ProductSansBold leading-tight">
                    Unite al nuevo <br/>espacio de <br/>Coworking <span className="underline decoration-8 decoration-[#FE7456] underline-offset-8">Online</span>
                </h1>
                <p className="max-sm:text-xl text-2xl mt-6 mb-6 leading-loose font-ProductSansRegular">
                    Una comunidad de freelancers y emprendedores que ampliará tus redes de contacto, facilitará tu trabajo y potenciará<br/> tu negocio.
                </p>

                <Button>
                    Unirme ahora 
                </Button>
            </div>
            <div className="max-sm:hidden max-sm:w-full max-sm:translate-x-56 max-sm:-translate-y-56 w-1/2 py-4 md:px-10 px-7">
                <img src="./src/assets/imagen-hero.png" alt="" />
            </div>
            
        </div>
    )
}

export default Hero;