import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';


const Detailapp = () => {
    const datax = useLoaderData();
    return (
        <div>
            i am detail {datax.title}
        </div>
    );
};

export default Detailapp;