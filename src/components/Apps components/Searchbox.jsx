import React, { useState, useEffect } from "react";
import Appcart from "../Home components/Appcart";
import Searcherror from "../Errors Pages/Searcherror";

const SearchApps = () => {
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredApps, setFilteredApps] = useState([]);

    useEffect(() => {
        fetch("/Data.json")
            .then((res) => res.json())
            .then((data) => {
                setApps(data);
                setFilteredApps(data);
            });
    }, []);

    useEffect(() => {
        const results = apps.filter((app) =>
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApps(results);
    }, [searchTerm, apps]);

    return (
        <div className=" container mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <p className='text-xl font-bold'>({filteredApps.length}) Apps Found</p>
                </div>
                <div>

                    <input
                        type="text"
                        placeholder="Search apps..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className=" border border-gray-300 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                </div>
            </div>

            {searchTerm && filteredApps.length === 0 ? 
            (
                <Searcherror></Searcherror>
            ) 
                : 
            (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-7 mt-5 p-5 md:p-0 '>
                    {filteredApps.map((app) => (
                        <Appcart key={app.id} app={app} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchApps;
