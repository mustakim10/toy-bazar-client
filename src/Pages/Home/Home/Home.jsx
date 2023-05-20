import Categories from "../../Categories/Categories";
import Gallery from "../../Gallery/Gallery";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Gallery></Gallery>
           <Categories></Categories>
        </div>
    );
};

export default Home;