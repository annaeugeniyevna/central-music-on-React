import PromoBg from "../assets/images/promo-bg.jpg";

const PromoBanner = () => {
    const bgPromo = {
            backgroundImage: `url(${PromoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        };
    return (
        <>
            <section
            style={bgPromo} 
            className="relative z-20 max-w-[320px] min-h-[200px] rounded-xl py-4 mx-auto -mt-24
            md:max-w-[680px] md:min-h-[210px] md:-mt-27 md:py-9
            lg:max-w-[1100px]">
                <div
                className="max-w-[1440px] mx-auto px-[5%]">
                    <div className="mb-5">
                        <h2
                        className="font-work font-bold text-2xl text-white text-center pb-2
                        md:text-3xl
                        lg:text-4xl">
                           FREE GUITAR LESSONS!
                        </h2>
                        <p
                        className="font-work font-semibold text-xs text-white text-center
                        md:text-base md:max-w-[350px] md:mx-auto md:leading-relaxed">
                            Purchase any guitar over $499.99 and recieve a one-hour guitar lesson free. 
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <a href="/"
                        className="font-work font-semibold text-xs text-white bg-btn-bg py-2 px-4 rounded-full
                        transition-all duration-300 hover:scale-105">
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PromoBanner;