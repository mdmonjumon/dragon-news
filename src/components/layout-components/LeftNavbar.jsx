import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])

    console.log(category)

    return (
        <div>
            <h3 className='font-semibold text-xl'>All Category</h3>

            <div className='flex flex-col '>
                {
                    category.map(newsCategory=> <NavLink key={newsCategory.category_id} className="btn">{newsCategory.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;