import GuitarGold from "../assets/images/guitar-gold.png";
import GuitarRed from "../assets/images/guitar-red.png";
import GuitarBlack from "../assets/images/guitar-black.png";
import GuitarOrange from "../assets/images/guitar-orange.png";

// Variable for cards
const cardStyle = "transition-all duration-300 hover:scale-105 cursor-pointer";

const Products = () => {
    return (
        <section
        className="mt-15 mb-10
        md:mt-22 md:mb-20">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <h2
                className="font-monserrat font-bold text-2xl text-gray text-center mb-4
                md:text-4xl">
                    <span 
                    className="block w-[90px] h-[3px] bg-primary mx-auto mb-1"></span>
                    New Products
                </h2>
                <div
                className="flex flex-col gap-3
                md:grid md:grid-cols-2 md:gap-8
                lg:flex lg:flex-row lg:justify-center">
                    <div 
                    className={`max-w-[324px] bg-white shadow-md rounded-lg pb-7
                    md:max-w-[330px]
                    lg:max-w-[370px]
                    ${cardStyle}`}>
                        <img 
                        src={GuitarGold} alt="Guitar gold"
                        className="max-w-[324px]
                        md:max-w-[330px]
                        lg:max-w-[370px]"/>
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
                    className={`max-w-[324px] bg-white shadow-md rounded-lg pb-7
                    md:max-w-[330px]
                    lg:max-w-[370px]
                    ${cardStyle}`}>
                        <img 
                        src={GuitarRed} alt="Guitar red"
                        className="max-w-[324px]
                        md:max-w-[330px]
                        lg:max-w-[370px]"/>
                        <div 
                        className="flex justify-between mx-6 mt-4">
                            <h3
                            className="font-work font-bold text-lg text-dark-gray">
                                Brand Name
                            </h3>
                            <p
                            className="font-montserrat font-bold text-lg text-dark-gray">
                                $2,995
                            </p>
                        </div>
                        <p
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-5">
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
                    className={`max-w-[324px] bg-white shadow-md rounded-lg pb-7
                    md:max-w-[330px]
                    lg:max-w-[370px]
                    ${cardStyle}`}>
                        <img 
                        src={GuitarBlack} alt="Guitar black"
                        className="max-w-[324px]
                        md:max-w-[330px]
                        lg:max-w-[370px]"/>
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
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-5">
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
                    md:max-w-[330px]
                    lg:hidden">
                        <img 
                        src={GuitarOrange} alt="Guitar orange"
                        className="max-w-[324px]
                        md:max-w-[330px]"/>
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
                        className="font-work font-medium text-base text-medium-gray ml-6 mt-1 mb-5">
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

export default Products;