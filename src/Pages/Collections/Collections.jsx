import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";


const Collections = () => {
    const [collections,setCollections] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCollections(data))
    },[])

  //  console.log(collections);
    return (
        <div>
            <div className="text-center space-y-3">
                
                <h2 className="text-5xl">Toy Categories</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur placeat quod architecto laborum, at cumque! Voluptatibus tempora, laborum unde veniam minus asperiores consectetur sapiente harum nesciunt officiis vero impedit porro.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    collections.map(categorie => <Categories
                    key={categorie._id}
                    name={categorie.name}
                    image={categorie.image}
                    price={categorie.price}
                    rating={categorie.rating}
                    ></Categories>)
                }
            </div>
        </div>
    );
};

export default Collections;