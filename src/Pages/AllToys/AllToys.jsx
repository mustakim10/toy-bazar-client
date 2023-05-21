import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
    const toys = useLoaderData()
    const { name, price,image} = toys;
    const {user} = useContext(AuthContext);

    const handleAllToys = event => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.name.value;
        const sellerName = form.seller?.value ;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const email = user?.email;
        const myToy = {
            toyName,
            email,
            image,
            SellerName: sellerName,
            category: category,
            price:price,
            quantity:quantity
        }
        console.log(myToy);

        fetch('http://localhost:5000/myToys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Toy Added Successfully');
            }
        })

    }

    return (
        <div>
            <h2>all toys are coming : {name}</h2>
            
                       <form onSubmit={handleAllToys}>
                       <div className="md:grid md:grid-cols-2 gap-6">
                       <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={'$'+ price} className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered" />
                               
                            </div>
                       </div>
                            <div className="form-control mt-6">
                                
                                <input className="btn btn-primary" type="submit" value="View Details" />
                            </div>
                       </form>
                    </div>
               
    );
};

export default AllToys;