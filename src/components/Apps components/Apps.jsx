import React, { use } from 'react';
import Appcart from '../Home components/Appcart';
import Searchbox from './Searchbox';

const Apps = ({ fetchData }) => {
    const data = use(fetchData);
    return (
        <>
            <div className='py-10 bg-gray-100 '>
                <div className='container mx-auto '>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <h1 className='font-bold text-4xl'>Our All Applications</h1>
                        <p className='text-gray-400 pt-4 p-5 md:p-0'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className='pt-10 pl-2 flex justify-between items-center px-5 md:px-0'>
                        <Searchbox></Searchbox>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apps;