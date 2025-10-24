import React, { useEffect, useState } from "react";


const Installation = () => {

    const [installedApps, setInstalledApps] = useState([]);

    // Load installed apps when the page loads
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(saved);
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
    };

    return (
        <div className="container mx-auto bg-gray-100 py-6">
            <div className="flex flex-col py-5 justify-center items-center gap-3 ">
                <h1 className="text-4xl font-bold">Your Installed Apps </h1>
                <p className="text-gray-400">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="flex justify-between w-full">
                <p className="text-2xl font-semibold"> {installedApps.length} Apps Found</p>
                <p><select defaultValue="Small" className="select select-sm">
                    <option>Sort By Size</option>
                    <option>Sort By Downloads</option>
                </select></p>
            </div>
            <div>

                {
                    installedApps.map((app) => (
                        <div className="">
                            <div className="flex justify-between items-center mt-4 bg-white">
                                <div className="flex">
                                    <div>
                                        <img src={app.image} alt="" className="w-14" />
                                    </div>
                                    <div>
                                        <h1>{app.title}</h1>
                                        <h1>Downloads: {app.downloads}</h1>
                                    </div>
                                </div>
                                <div>
                                    <button onClick={() => handleUninstall(app.id)} className="btn bg-green-400 text-white">Unsinstall</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Installation;