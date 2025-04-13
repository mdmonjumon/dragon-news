import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">

            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className="grid grid-cols-12">
                <aside className="col-span-3 ">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6 ">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3 ">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayout;