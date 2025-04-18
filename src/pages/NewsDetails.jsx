import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-components/RightNavbar";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = () => {

    const newsDetails = useLoaderData()
    const newsData = (newsDetails.data[0])

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className="max-w-7xl mx-auto grid grid-cols-12 gap-2">
                <section className="col-span-9">
                    <h3 className="font-semibold text-xl mb-5">Dragon News</h3>
                    <div className="card shadow-sm p-5 gap-3">
                        <figure>
                            <img className="w-full"
                                src={newsData.image_url}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body p-0">
                            <h2 className="card-title">{newsData.title}</h2>
                            <p>{newsData.details}</p>
                            <div className="card-actions justify-start mt-4">
                                <Link to={`/category/${newsData.category_id}`} className="btn btn-accent"> <FaArrowLeft /> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;