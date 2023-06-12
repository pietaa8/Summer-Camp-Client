import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";
import Extrasection from "../ExtraSection/Extrasection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Extrasection></Extrasection>

            
        </div>
    );
};

export default Home;