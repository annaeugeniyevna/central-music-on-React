import guitarGold from "../assets/images/guitar-gold.png";

const Guitars = () => {
    return (
        <section>
            <div 
            className="max-w-[1440px] mx-auto px-[5%] mt-32">
                <h2
                className="font-work font-bold text-3xl text-gray text-center">
                    Guitars
                </h2>
                <div>
                    <img 
                    src={guitarGold} alt="Guitar"
                    className="mb-5"/>
                    <h3
                    className="font-work font-semibold text-base text-dark-gray mb-1">
                        Brand Name
                    </h3>
                    <p  
                    className="font-work font-medium text-sm text-medium-gray">
                        Product description here
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Guitars;