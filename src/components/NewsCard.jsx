import { FaStar, FaEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { useState } from "react";

const NewsCard = ({ news }) => {
    const [readMore, setReadMore] = useState(false)
    const handleReadMore = () =>{

        setReadMore(!readMore)

    }


    return (
        <div className="card gap-4 w-full shadow-md mx-auto mt-5">
            <div className="flex items-center justify-between p-4 bg-[#F3F3F3] rounded-lg rounded-b-none">
                <div className="flex items-center space-x-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={news.author.img}
                        alt={news.author.name}
                    />
                    <div>
                        <h2 className="font-bold text-sm">{news.author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(news.author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 text-lg">
                    <BsBookmark className="cursor-pointer" />
                    <FiShare2 className="cursor-pointer" />
                </div>
            </div>

            <div className="px-4">
                <h2 className="font-bold text-xl text-[#403F3F] mb-2">{news.title}</h2>
            </div>

            <figure>
                <img
                    src={news.image_url}
                    alt="News"
                    className="w-full min-h-64 object-cover px-4"
                />
            </figure>

            <div className="card-body gap-1 p-4">
                <p className="text-sm text-gray-600">
                    {
                        readMore? news.details:news.details.slice(0, 180)
                    }
                </p>
                <span onClick={handleReadMore} className="text-orange-500 font-semibold cursor-pointer">
                    {
                        readMore? 'Read Less':'Read More'
                    }
                </span>

                <div className="divider"></div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center text-orange-400 space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                        <span className="text-black ml-2">{news.rating.number}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
