import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    
    return (
        <div className='md:px-4 mb-10'>
            <h3 className="text-xl font-bold text-center">Dragon News Home</h3>

            <div>
                {
                    news.map((singleNews, idx)=><NewsCard key={idx} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;