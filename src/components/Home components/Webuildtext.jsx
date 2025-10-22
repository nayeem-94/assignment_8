import React from 'react';

const Webuildtext = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className=' text-4xl md:text-6xl font-bold '>
                We build <br />
            </h1>
            <h1 className=' text-4xl md:text-6xl font-bold mt-2'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>Productive </span> 
                 Apps
            </h1>
            <p className='text-gray-500 md:text-lg mt-5 pl-5 md:p-0 '>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. </p>
                <p className='text-gray-500 md:text-lg pl-5 md:p-0'> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex flex-1 gap-6 mt-9  mb-10  '>
                <div className='flex btn  cursor-pointer rounded-lg h-12'>
                    <img className='w-14' src="/src/assets/playstore.svg" alt="" />
                    <button className=' cursor-pointer text-lg'>Google Play</button>
                </div>
                <div className='flex gap-5 btn  cursor-pointer h-12 rounded-lg'>
                    <img className='w-7' src="/src/assets/appstore.svg" alt="" />
                    <button className='text-lg cursor-pointer'>App Store</button>
                </div>
            </div>

            <div>
                <img src="/src/assets/hero.png" alt="" />
            </div>



        </div>
    );
};

export default Webuildtext;