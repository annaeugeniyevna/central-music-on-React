import cableAqua from "../assets/images/guitar-cable-aqua.png";
import cableGoldish from "../assets/images/tweed-cable-goldish.png";
import tunerPedal from "../assets/images/guitar-tuner-pedal.png";
import Strings from "../assets/images/guitar-strings.png";

const Finds = () => {
    return (
        <section 
        className="pt-12 pb-10 bg-light-blue
        md:pt-22  md:pb-22">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <h2
                className="font-monserrat font-bold text-2xl text-gray text-center mb-10
                md:text-4xl md:mb-11">
                    <span 
                    className="block w-[90px] h-[3px] bg-primary mx-auto mb-1"></span>
                    Popular Finds
                </h2>
                <div
                className="flex flex-col gap-9
                md:grid md:grid-cols-2 md:gap-8">
                    <div 
                    className="max-w-[324px] bg-white shadow-md rounded-lg pb-7
                    md:mb-3">
                        <img 
                        src={cableAqua} alt="Guitar gold"
                        className="mx-auto"/>
                        <div 
                        className="flex justify-between mx-6 mt-4">
                            <h3
                            className="font-work font-bold text-lg text-dark-gray">
                                Brand Name
                            </h3>
                            <p
                            className="font-work font-bold text-lg text-dark-gray">
                                $2,995
                            </p>
                        </div>
                        <p
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-6">
                            Product description here
                        </p>
                        <a href="/"
                        className="font-montserrat font-regular text-sm text-gray px-2 py-1 border border-smoke rounded-full ml-6">
                            <span
                            className="font-bold text-base mr-1">
                                0 
                            </span>
                            colors available
                        </a>
                    </div>
                    <div 
                    className="max-w-[324px] bg-white shadow-md rounded-lg pb-7
                    md:mb-3">
                    <img 
                    src={cableGoldish} alt="Guitar gold"
                    className="mx-auto"/>
                        <div 
                        className="flex justify-between mx-6 mt-4">
                            <h3
                            className="font-work font-bold text-lg text-dark-gray">
                                Brand Name
                            </h3>
                            <p
                            className="font-work font-bold text-lg text-dark-gray">
                                $2,995
                            </p>
                        </div>
                        <p
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-6">
                            Product description here
                        </p>
                        <a href="/"
                        className="font-montserrat font-regular text-sm text-gray px-2 py-1 border border-smoke rounded-full ml-6">
                            <span
                            className="font-bold text-base mr-1">
                                0 
                            </span>
                            colors available
                        </a>
                    </div>
                    <div 
                    className="max-w-[324px] bg-white shadow-md rounded-lg pb-7">
                    <img 
                    src={tunerPedal} alt="Guitar gold"
                    className="mx-auto"/>
                        <div 
                        className="flex justify-between mx-6 mt-4">
                            <h3
                            className="font-work font-bold text-lg text-dark-gray">
                                Brand Name
                            </h3>
                            <p
                            className="font-work font-bold text-lg text-dark-gray">
                                $2,995
                            </p>
                        </div>
                        <p
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-6">
                            Product description here
                        </p>
                        <a href="/"
                        className="font-montserrat font-regular text-sm text-gray px-2 py-1 border border-smoke rounded-full ml-6">
                            <span
                            className="font-bold text-base mr-1">
                                0 
                            </span>
                            colors available
                        </a>
                    </div>
                    <div 
                    className="max-w-[324px] bg-white shadow-md rounded-lg pb-7">
                    <img 
                    src={Strings} alt="Guitar gold"
                    className="mx-auto"/>
                        <div 
                        className="flex justify-between mx-6 mt-4">
                            <h3
                            className="font-work font-bold text-lg text-dark-gray">
                                Brand Name
                            </h3>
                            <p
                            className="font-work font-bold text-lg text-dark-gray">
                                $2,995
                            </p>
                        </div>
                        <p
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-6">
                            Product description here
                        </p>
                        <a href="/"
                        className="font-montserrat font-regular text-sm text-gray px-2 py-1 border border-smoke rounded-full ml-6">
                            <span
                            className="font-bold text-base mr-1">
                                0 
                            </span>
                            colors available
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Finds;