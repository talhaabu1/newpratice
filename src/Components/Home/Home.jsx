import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useRouteLoaderData();
    console.log("🚀 ~ file: About.jsx ~ line 6 ~ About ~ data", data)
    
    return (
        <div>
        <h1>talha name is vaer</h1>
        </div>
    );
};

export default Home;