import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import Graph from './Graph';

const Detailapp = () => {
    const app = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);
    const ratingData = Object.entries(app.ratings).map(([key, value]) => ({
        name: key,
        count: value
    }));

    // 🧠 Check if app already installed
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const found = stored.some((a) => a.id === app.id);
        setIsInstalled(found);
    }, [app.id]);

    // ⚙️ Handle Install Click
    const handleInstall = () => {
        const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
        const alreadyInstalled = stored.find((a) => a.id === app.id);

        if (!alreadyInstalled) {
            stored.push(app);
            localStorage.setItem("installedApps", JSON.stringify(stored));
            setIsInstalled(true);
        }
    };


    return (
        <div className=' bg-gray-100'>
            <div className='container mx-auto py-15'>

                <div className='flex flex-col gap-8  md:flex-row'>

                    <div className='md:w-3/8 flex justify-center items-center'>
                        <img src={app.image} alt={app.title} className='h-full p-5 md:p-0  ' />
                    </div>
                    <div className='w-full p-5 flex flex-col gap-1'>
                        <div className='font-bold text-2xl'>{app.title}</div>
                        <div>
                            <span className='text-gray-400'>Developed by : </span>
                            <span className=' font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'> {app.companyName} </span>
                        </div>
                        <hr className="my-8 w-full border-gray-300" />
                        <div className='flex gap-12 md:gap-25' >
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
                        <div className="mt-7 cursor-pointer hover:scale-103 duration-400">
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`px-4 py-2 rounded-md  font-semibold text-white transition-all ${isInstalled
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#00d390] hover:bg-[#00b57c] cursor-pointer"
                                    }`}
                            >
                                {isInstalled ? "Installed" : `Install Now (${app.size} MB)` }
                            </button>
                        </div>

                    </div>
                </div>


                <hr className="my-8 w-full border-gray-300" />

                <div className='p-5'>
                    <h2 className='font-bold text-xl '>Ratings </h2>
                    <Graph data={ratingData} ></Graph>
                </div>

                <hr className="my-8 w-full border-gray-300" />
                <div className='p-5'>
                    <h1 className='text-xl font-bold'>Description</h1>
                    <p className='text-sm text-gray-500 pt-6'>{app.description}</p>
                </div>


            </div>
        </div>
    );
};

export default Detailapp;