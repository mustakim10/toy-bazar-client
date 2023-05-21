import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toys = useLoaderData()
    const {name} = toys ;
    return (
        <div>
            <h2>all toys are coming : {name}</h2>
        </div>
    );
};

export default AllToys;