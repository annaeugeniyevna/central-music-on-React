import youtubeIcon from "../assets/images/youtube-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import instIcon from "../assets/images/instagram-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import logoIcon from "../assets/images/logo.png";

const Footer = () => {
    return (
        <footer 
        className="bg-gray pt-9
        md:pt-17">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <div
                className="w-full md:flex md:items-center md:justify-between">
                    <div
                    className="md:flex md:gap-22">
                        <div
                    className="pb-8 md:pb-12">
                    <div
                    className="max-w-[110px] mx-auto
                    md:mx-0">
                        <h2
                        className="font-montserrar font-bold text-lg text-white text-center mb-2
                        md:text-left">
                            <span className="block w-[58px] h-[3px] bg-white mx-auto mb-2
                            md:mx-0 md:w-[75px]"></span>
                            My Account
                        </h2>
                    </div>
                    <ul
                    className="flex flex-col gap-2 text-center mb-8
                    md:text-left">
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Overview
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Order History
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Account information
                            </a>
                        </li>
                    </ul>
                        </div>
                        <div
                    className=" hidden 
                    md:block md:pb-8 md:pb-12">
                    <div
                    className="max-w-[110px] mx-auto
                    md:mx-0">
                        <h2
                        className="font-montserrar font-bold text-lg text-white text-center mb-2
                        md:text-left">
                            <span className="block w-[58px] h-[3px] bg-white mx-auto mb-2
                            md:mx-0 md:w-[75px]"></span>
                            Store
                        </h2>
                    </div>
                    <ul
                    className="flex flex-col gap-2 text-center mb-8
                    md:text-left">
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Security Notice
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Location and Hours
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Rentals
                            </a>
                        </li>
                        <li>
                            <a href="/"
                            className="font-montserrar font-regular text-lg text-white">
                                Privacy Notice
                            </a>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <div>
                        <img 
                        src={logoIcon} alt="Logo"
                        className="hidden md:block md:mb-7"/>
                        <div
                        className="max-w-[120px] flex flex-row gap-3 mx-auto
                        md:mx-0 md:ml-35">
                            <a href="/">
                                <img
                                src={youtubeIcon} alt="Youtube"/>
                            </a>
                            <a href="/">
                                <img
                                src={twitterIcon} alt="Twitter"/>
                            </a>
                            <a href="/">
                                <img
                                src={instIcon} alt="Instagram"/>
                            </a>
                            <a href="/">
                                <img
                                src={facebookIcon} alt="Facebook"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
            className="bg-dark-gray pt-2 pb-2">
                <div
                className="px-[5%]">
                    <p
                    className="font-montserrat font-regular text-base text-white    text-center
                    md:text-left">
                        ©2021 Music Store
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;