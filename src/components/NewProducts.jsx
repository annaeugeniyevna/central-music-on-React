import Pedalboard from "../assets/images/pedalboard.webp";
import Guitar from "../assets/images/guitar.webp";
import guitarPiano from "../assets/images/guitar-and-piano.webp";
import manGuitar from "../assets/images/man-with-guitar.webp";
import Musician from "../assets/images/musician.webp";

// Variable for cards
const cardStyle = "transition-all duration-300 hover:scale-105 pointer-cursor";

const NewProducts = () => {
    return (
        <section
        className="mt-10 mb-15
        md:mt-20 md:mb-20">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <h2
                className="font-monserrat font-bold text-2xl text-gray text-center mb-6
                md:text-4xl md:mb-12">
                    <span 
                    className="block w-[90px] h-[3px] bg-primary mx-auto mb-1"></span>
                    New Products
                </h2>
                <div
                className="flex flex-col gap-6
                md:grid md:grid-cols-2
                lg:grid lg:grid-cols-6 lg:gap-0 lg:mx-auto">
                    <div
                    className={`max-w-[324px] bg-smoke rounded-xl
                    md:min-w-[330px] md:mb-4
                    lg:col-span-3 lg:min-w-[570px] lg:mb-12
                    ${cardStyle}`}>
                        <img 
                        src={Pedalboard} alt="Pedalboard"
                        className="md:min-h-[400px] md:min-w-[330px]
                        lg:min-w-[570px]"/>
                        <div 
                        className="px-8 pb-8">
                            <h3
                            className="font-work font-bold text-2xl text-dark-gray mt-8 mb-2">
                                Article Title
                            </h3>
                            <p
                            className="font-work font-semibold text-lg text-medium-gray">
                                Article Subhead
                            </p>
                        </div>
                    </div>
                    <div
                    className={`max-w-[324px] bg-dark-gray rounded-xl
                    md:min-w-[330px] md:mb-4
                    lg:col-span-3 lg:min-w-[570px] lg:mb-12
                    ${cardStyle}`}>
                        <img 
                        src={Guitar} alt="Guitar"
                        className="md:min-h-[400px] md:min-w-[330px]
                        lg:min-w-[570px]"/>
                        <div 
                        className="px-8 pb-8">
                            <h3
                            className="font-work font-bold text-2xl text-white mt-8 mb-2">
                                Article Title
                            </h3>
                            <p
                            className="font-work font-semibold text-lg text-light-gray">
                                Article Subhead
                            </p>
                        </div>
                    </div>
                    <div
                    className={`hidden bg-dark-gray rounded-xl
                    md:min-w-[330px]
                    lg:block lg:col-span-2 lg:max-w-[360px]
                    ${cardStyle}`}>
                        <img 
                        src={Musician} alt="Man with guitar"
                        className="md:max-h-[400px]
                        lg:min-w-[360px]"/>
                        <div 
                        className="px-8 pb-8">
                            <h3
                            className="font-work font-bold text-2xl text-white mt-8 mb-2">
                                Article Title
                            </h3>
                            <p
                            className="font-work font-semibold text-lg text-light-gray">
                                Article Subhead
                            </p>
                        </div>
                    </div>
                    <div
                    className={`max-w-[324px] bg-smoke rounded-xl
                    md:min-w-[330px]
                    lg:col-span-2 lg:min-w-[360px]
                    ${cardStyle}`}>
                        <img 
                        src={guitarPiano} alt="Guitar and piano"
                        className="md:min-h-[400px] md:min-w-[330px]
                        lg:min-w-[360px]"/>
                        <div 
                        className="px-8 pb-8">
                            <h3
                            className="font-work font-bold text-2xl text-dark-gray mt-8 mb-2">
                                Article Title
                            </h3>
                            <p
                            className="font-work font-semibold text-lg text-medium-gray">
                                Article Subhead
                            </p>
                        </div>
                    </div>
                    <div
                    className={`max-w-[324px] bg-dark-gray rounded-xl
                    md:min-w-[330px]
                    lg:col-span-2 lg:min-w-[360px]
                    ${cardStyle}`}>
                        <img 
                        src={manGuitar} alt="Man with guitar"
                        className="md:min-h-[400px] md:min-w-[330px]
                        lg:min-w-[360px]"/>
                        <div 
                        className="px-8 pb-8">
                            <h3
                            className="font-work font-bold text-2xl text-white mt-8 mb-2">
                                Article Title
                            </h3>
                            <p
                            className="font-work font-semibold text-lg text-light-gray">
                                Article Subhead
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewProducts;