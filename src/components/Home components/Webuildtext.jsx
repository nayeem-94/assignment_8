import React from 'react';
import heroImage from "../../assets/hero.png";
import playstore from "../../assets/playstore.svg";
import appstore from "../../assets/appstore.svg";

const Webuildtext = () => {

    const handleClick1 = () => {
                window.open("https://play.google.com/store/", "_blank"); 
    };
    const handleClick2 = () => {
                window.open("https://www.apple.com/app-store/", "_blank"); 
    };
    return (

        
        <>
        

            <div className='flex flex-col justify-center items-center container mx-auto mt-5 '>
                <h1 className=' text-4xl md:text-6xl font-bold '>
                    We build <br />
                </h1>
                <h1 className=' text-4xl md:text-6xl font-bold mt-2'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Productive </span>
                    Apps
                </h1>
                <p className='text-gray-500 md:text-lg mt-5 pl-5 md:p-0 '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. </p>
                <p className='text-gray-500 md:text-lg pl-5 md:p-0'> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div onClick={handleClick1} className='flex flex-1 gap-6 mt-9  mb-10  '>
                    <div className='flex btn  cursor-pointer rounded-lg h-12'>
                        <img className='w-14' src={playstore} alt="" />
                        <button className=' cursor-pointer text-lg'>Google Play</button>
                    </div>
                    <div onClick={handleClick2} className='flex gap-5 btn  cursor-pointer h-12 rounded-lg'>
                        <img className='w-7' src={appstore} alt="" />
                        <button className='text-lg cursor-pointer'>App Store</button>
                    </div>
                </div>

                <div>
                    <img src={heroImage} alt="" />
                </div>


            </div>
            <div className='bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-10 '>


                <div className='flex justify-center pt-4'>
                    <h1 className='text-white text-2xl md:text-4xl font-bold' >Trusted by Millions, Built for You</h1>
                </div>

                <div className='flex  flex-col md:flex-row justify-center text-white md:gap-15 pt-7 '>

                    <div className="">
                        <div className="stat flex justify-center flex-col items-center gap-2">
                            <div className="stat-title text-white">Total Downloads</div>
                            <div className="stat-value text-5xl">29.6M</div>
                            <div className="stat-desc text-white">21% more than last month</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="stat flex justify-center flex-col items-center gap-2">
                            <div className="stat-title text-white">Total Reviews</div>
                            <div className="stat-value text-white text-5xl">906K</div>
                            <div className="stat-desc text-white">46% more than last month</div>
                        </div>
                    </div>
                    <div className="">
                        <div className="stat flex justify-center flex-col items-center gap-2">
                            <div className="stat-title text-white ">Active Apps</div>
                            <div className="stat-value text-white text-5xl">132+</div>
                            <div className="stat-desc text-white">31 More Will Launch</div>
                        </div>
                    </div>

                </div>



            </div>



        </>
    );
};

export default Webuildtext;