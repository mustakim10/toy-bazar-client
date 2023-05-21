import { useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toys = useLoaderData()
    const { name, } = toys;
    return (
        <div>
            <h2>all toys are coming : {name}</h2>
            
                       <form>
                       <div className="grid grid-cols-2 gap-6">
                       <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input type="text" placeholder="toy name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" placeholder="Seller Name" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" placeholder="Category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Quantity" className="input input-bordered" />
                               
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