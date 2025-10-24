import React, { use } from 'react';
import Webuildtext from './Webuildtext';
import Appspage from './Appspage';

const Home = ({ fetchData }) => {
    const data = use(fetchData);
    // console.log(data);
    return (
        <>
            <div className='bg-gray-100'>

                <Webuildtext ></Webuildtext>
                <Appspage data={data}></Appspage>
            </div>


        </>
    );
};

export default Home;