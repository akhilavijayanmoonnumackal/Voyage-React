import React from "react";
import LoginImg from '../assets/img/login.jpg';
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src={LoginImg} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-white text-4xl font-bold text-center">SIGN UP</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="password" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Mobile No.</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="phone" />
                    </div>
                    <Link to="/">
                    <button className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg">SIGN UP</button>
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default Signup;