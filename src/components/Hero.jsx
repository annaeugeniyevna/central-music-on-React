import HeroBg from "../assets/images/hero-bg.webp";

const Hero = () => {
    const bgStyle = {
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section 
        style={bgStyle}
        className="w-full h-[510px] pt-50 relative">
            <div className="absolute inset-0 bg-black/40 z-0"></div>
            <div
            className="max-w-[1440px] mx-auto px-[5%] relative px-10">
                <h1 
                className="max-w-[280px] font-montserrat font-bold text-4xl text-white leading-tight text-center mx-auto">
                    Fullfilling dreams with strings attached
                </h1>
            </div>
        </section>
    )
}

export default Hero;