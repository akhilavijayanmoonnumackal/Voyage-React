import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { SiYourtraveldottv } from 'react-icons/si';
import { Link } from "react-router-dom";

const Header = () => {
    const [header, setHeader] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleHeader = () => {
        setHeader(!header)
    }

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex fixed  top-0 justify-between items-center h-24 w-[100%] mx-auto px-4 text-white transition-colors${scrolled ? ' bg-gray-900' : 'bg-transparent'}`}>
            <h1 className="w-1 text-3xl"><SiYourtraveldottv color="red" /></h1>
            <h1 className="w-full text-3xl font-bold text-yellow-500 ml-6">Voyage.</h1>
            <ul className="hidden md:flex">
            <Link to="/"><li className="p-4">Home</li></Link>
                <li className="p-4">Places</li>
                <li className="p-4">Resorts</li>
                <Link to="/profile"><li className="p-4">Profile</li></Link>
                <li className="p-4">Contact</li>
                <div className="text-white p-4 bg-yellow-600 rounded-lg">
                    <Link to='/login'><button>Login</button></Link>
                </div>
            </ul>
            <div onClick={handleHeader} className="block md:hidden">
                {header ? <AiOutlineCloseCircle size={20} /> : <AiOutlineMenu size={20} />}

            </div>

            <div className={header ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-1 text-3xl h-0 pt-2"><SiYourtraveldottv color="red" /></h1>
                <h1 className="w-full text-3xl font-bold text-yellow-500 ml-7">Voyage.</h1>
                <ul className="uppercase p-4">
                    <Link to="/"><li className="p-4 border-b border-gray-600">Home</li></Link>
                    <li className="p-4 border-b border-gray-600">Places</li>
                    <li className="p-4 border-b border-gray-600">Resorts</li>
                    <Link to="/profile"><li className="p-4 border-b border-gray-600">Profile</li></Link>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                    <Link to='/login'><li className="p-4 border-b border-gray-600">Login</li></Link>

                </ul>
            </div>
        </div>
    )
}

export default Header;