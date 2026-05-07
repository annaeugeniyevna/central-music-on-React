import GuitarGold from "../assets/images/guitar-gold.png";
import GuitarRed from "../assets/images/guitar-red.png";
import GuitarBlack from "../assets/images/guitar-black.png";
import GuitarOrange from "../assets/images/guitar-orange.png";

const Products = () => {
    return (
        <section
        className="mt-15 mb-10">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <h2
                className="font-monserrat font-bold text-2xl text-gray text-center mb-4">
                    <span 
                    className="block w-[90px] h-[3px] bg-primary mx-auto mb-1"></span>
                    New Products
                </h2>
                <div
                className="flex flex-col gap-3">
                    <div 
                    className="bg-white shadow-md rounded-lg pb-7">
                        <img src={GuitarGold} alt="Guitar gold"/>
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
                    className="bg-white shadow-md rounded-lg pb-7">
                        <img src={GuitarRed} alt="Guitar red"/>
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
                    className="bg-white shadow-md rounded-lg pb-7">
                        <img src={GuitarBlack} alt="Guitar black"/>
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
                    className="bg-white shadow-md rounded-lg pb-7">
                        <img src={GuitarOrange} alt="Guitar orange"/>
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