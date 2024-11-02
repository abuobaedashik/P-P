import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../assets/Food/Food';

const SaveFood = () => {
     const food =useLoaderData()
    return (
        <div className='mx-auto mt-44 w-11/12'>
            <p>Total Food {food.length}</p>
            <p className='text-center text-4xl mb-6 text-red-400 font-bold'>See Our All Products</p>
            <div className='grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-4 p-5 '>
                { food.map(foods=> <Food key={foods.id} foods={foods}></Food>)}
            </div>
        </div>
    );
};

export default SaveFood;