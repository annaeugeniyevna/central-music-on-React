import youtubeIcon from "../assets/images/youtube-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import instIcon from "../assets/images/instagram-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";

const Footer = () => {
    return (
        <footer 
        className="bg-gray pt-9">
            <div
            className="max-w-[1440px] mx-auto px-[5%]">
                <div
                className="pb-8">
                    <div
                    className="max-w-[110px] mx-auto">
                        <h2
                        className="font-montserrar font-bold text-lg text-white text-center mb-2">
                            <span className="block w-[58px] h-[3px] bg-white mx-auto mb-2"></span>
                            My Account
                        </h2>
                    </div>
                    <ul
                    className="flex flex-col gap-2 text-center mb-8">
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
                    <div
                    className="max-w-[120px] flex flex-row gap-3 mx-auto">
                        <img
                        src={youtubeIcon} alt="Youtube"/>
                        <img
                        src={twitterIcon} alt="Twitter"/>
                        <img
                        src={instIcon} alt="Instagram"/>
                        <img
                        src={facebookIcon} alt="Facebook"/>
                    </div>
                </div>
            </div>
            <div
            className="bg-dark-gray pt-2 pb-2">
                <p
                className="font-montserrat font-regular text-base text-white text-center">
                    ©2021 Music Store
                </p>
            </div>
        </footer>
    )
}

export default Footer;