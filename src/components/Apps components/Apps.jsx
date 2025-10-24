import React, { use } from 'react';
import Appcart from '../Home components/Appcart';
import Searchbox from './Searchbox';

const Apps = ({ fetchData }) => {
    const data = use(fetchData);
    return (
        <>
            <div className='py-10 bg-gray-100 '>
                <div className='container mx-auto '>

                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-4xl'>Our All Applications</h1>
                        <p className='text-gray-400 pt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className='pt-10 pl-2 flex justify-between items-center'>
                        <p className='text-xl font-bold'>({data.length}) Apps Found</p>
                        <p>
                            <Searchbox></Searchbox>
                        </p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-7 mt-5 '>
                        {data.map(app => (
                            <Appcart key={app.id} app={app} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apps;