import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-gray-400 p-3'>
            <p className='font-medium text-xl bg-[#D72050] py-2 px-4 text-white max-w-min'>Latest</p>
            <Link>
                <div className='font-medium text-lg'>
                    <Marquee
                        speed={70}
                    >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, distinctio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo culpa harum commodi fugit, voluptatem beatae esse accusantium suscipit nobis earum. Lorem ipsum dolor sit amet.
                    </Marquee>
                </div>
            </Link>
        </div>
    );
};

export default LatestNews;