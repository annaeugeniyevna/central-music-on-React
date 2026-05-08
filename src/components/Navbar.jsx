import {useState} from 'react';
import { CiMenuBurger  } from "react-icons/ci";
import {X} from "lucide-react";
import {NavLink} from "react-router-dom";

import Logo from "../assets/images/logo.png";
import cartIcon from "../assets/images/cart-icon.svg";
import profileIcon from "../assets/images/profile-icon.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black/60 fixed top-0 w-full z-[999]">
            <div 
            className="max-w-[1440px] mx-auto px-[5%]">
                <nav className="flex justify-between items-center pt-10 pb-2 z-[999]">
                        <a href="/"
                        className="relative z-[110]">
                            <img src={Logo} alt="Logo - Central Music"
                            className="max-w-[155px] md:max-w-[200px]"/>
                        </a>
                        <button 
                        className="block relative z-[1000]"
                        onClick={() => { 
                            setIsOpen(!isOpen)}}>
                            {isOpen ? (
                            <X className="w-8 h-8 text-white"
                            aria-label="Toggle menu"/>
                         ) : (
                             <CiMenuBurger  
                             className="w-8 h-8 text-white"
                             aria-label="Toggle menu"/>
                         )
                        }
                        </button>
                </nav>
                        {isOpen && (
                            <div 
                            className="fixed top-25 right-0 w-[220px] h-[350px] py-6 px-4 bg-medium-gray rounded-xl z-[50]">
                            <ul 
                            className="flex flex-col items-center gap-3 mb-6">
                                <li>
                                    <NavLink to="/"
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                <NavLink to="/guitars"
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Guitars
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/accessories" 
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Accessories
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/storage" 
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Storage
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/lessons" 
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Lessons
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/repairs" 
                                    className="font-work font-semibold text-lg text-item-nav"
                                    onClick={() => setIsOpen(false)}>
                                        Repairs
                                    </NavLink>
                                </li>
                            </ul>
                            <div 
                            className="flex">
                                <a href="/">
                                    <img src={cartIcon} alt="Cart"/>
                                </a>
                                <a href="/">
                                    <img src={profileIcon} alt="Profile"/>
                                </a>
                            </div>
                        </div>
                        )}
            </div>
        </header>
    )
}

export default Navbar;