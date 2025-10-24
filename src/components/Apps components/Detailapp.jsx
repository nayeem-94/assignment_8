import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"
import Graph from './Graph';

const Detailapp = () => {
    const app = useLoaderData();

    const ratingData = Object.entries(app.ratings).map(([key, value]) => ({
        name: key,
        count: value
    }));



    return (
        <div className=' bg-gray-100'>
            <div className='container mx-auto py-15'>
                <div className='flex flex-col gap-8  md:flex-row'>
                    <div className='w-3/8'>
                        <img src={app.image} alt={app.title} className='h-full ' />
                    </div>
                    <div className='w-full p-5 flex flex-col gap-1'>
                        <div className='font-bold text-2xl'>{app.title}</div>
                        <div>
                            <span className='text-gray-400'>Developed by : </span>
                            <span className=' font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'> {app.companyName} </span>
                        </div>
                        <hr className="my-8 w-full border-gray-300" />
                        <div className='flex gap-25' >
                            <div className='flex flex-col gap-1'>
                                <img src={download} alt="" className='w-8' />
                                <p className='text-sm'>Downloads</p>
                                <h1 className='font-bold text-2xl' >{app.downloads}</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <img src={rating} alt="" className='w-8' />
                                <p className='text-sm'>Average Ratings</p>
                                <h1 className='font-bold text-2xl'>{app.ratingAvg}</h1>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <img src={review} alt="" className='w-8' />
                                <p className='text-sm'>Total Reviews</p>
                                <h1 className='font-bold text-2xl'>{app.reviews}</h1>
                            </div>
                        </div>
                        <div className='mt-7 cursor-pointer hover:scale-103 duration-400' >
                            <span className='bg-[#00d390] text-white p-2 rounded-sm font-semibold'>
                                Install Now ({app.size} MB)
                            </span>

                        </div>

                    </div>
                </div>


                <hr className="my-8 w-full border-gray-300" />

                <div>
                    <h2 className='font-bold text-xl'>Rating Distribution</h2>
                    <Graph data={ratingData} ></Graph>
                </div>

            </div>
        </div>
    );
};

export default Detailapp;