import React from "react";
import ProfileImg from '../assets/img/profile.jpg';
import {Link} from 'react-router-dom';

const Profile = () => {
    return (
        <div className=" p-4 mt-60 ml-16 mr-16 w-140 h-96 flex justify-center ">
            
            <div className="flex flex-col justify-center">
                <form className=" w-96  bg-gray-900 p-8 px-8 rounded-lg">
                <img className="h-16 rounded-full ml-[140px]" src={ProfileImg} alt="" />
                    <h2 className="text-white text-xl font-bold text-center">AKHILA VIJAYAN</h2>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Full Name</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Place</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none"  type="text" />
                    </div>
                    <div className="text-gray-400 flex flex-col py-2">
                        <label>Mobile No.</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2  focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="phone" />
                    </div>
                    <Link to="/">
                    <button className="w-full my-5 py-5 bg-yellow-600 shadow-lg shadow-yellow-600/50 hover:shadow-yellow-600/20 text-white font-semibold rounded-lg">SAVE</button>
                    </Link>
                </form>
            </div>
            
            
        </div>
    )
}

export default Profile;