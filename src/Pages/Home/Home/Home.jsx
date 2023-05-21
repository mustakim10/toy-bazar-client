import Categories from "../../Categories/Categories";
import Collections from "../../Collections/Collections";
import Gallery from "../../Gallery/Gallery";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Gallery></Gallery>
           <Collections></Collections>
           <Categories></Categories>
        </div>
    );
};

export default Home;