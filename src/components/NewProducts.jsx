import Pedalboard from "../assets/images/pedalboard.png";
import Guitar from "../assets/images/guitar.png";
import guitarPiano from "../assets/images/guitar-and-piano.png";
import manGuitar from "../assets/images/man-with-guitar.png";

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
                md:grid md:grid-cols-2">
                    <div
                    className="max-w-[324px] bg-smoke rounded-xl
                    md:min-w-[330px] md:mb-4">
                        <img 
                        src={Pedalboard} alt="Pedalboard"
                        className="md:min-h-[400px] md:min-w-[330px]"/>
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
                    className="max-w-[324px] bg-dark-gray rounded-xl
                    md:min-w-[330px] md:mb-4">
                        <img 
                        src={Guitar} alt="Guitar"
                        className="md:min-h-[400px] md:min-w-[330px]"/>
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
                    className="max-w-[324px] bg-smoke rounded-xl
                    md:min-w-[330px]">
                        <img 
                        src={guitarPiano} alt="Guitar and piano"
                        className="md:min-h-[400px] md:min-w-[330px]"/>
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
                    className="max-w-[324px] bg-dark-gray rounded-xl
                    md:min-w-[330px]">
                        <img 
                        src={manGuitar} alt="Man with guitar"
                        className="md:min-h-[400px] md:min-w-[330px]"/>
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