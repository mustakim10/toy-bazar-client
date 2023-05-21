import Categories from "../../Categories/Categories";
import Collections from "../../Collections/Collections";
import Gallery from "../../Gallery/Gallery";
import Responsibility from "../../Responsibility/Responsibility";
import Xtra from "../../Xtra/Xtra";
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
           <Responsibility></Responsibility>
           <Xtra></Xtra>
        </div>
    );
};

export default Home;