import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">

            <header>
                <section>
                    <Header></Header>
                </section>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <section>
                    <Navbar></Navbar>
                </section>
            </nav>

            <main>
                <section>
                    
                </section>
            </main>

        </div>
    );
};

export default HomeLayout;