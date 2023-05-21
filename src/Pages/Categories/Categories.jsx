import { Link } from "react-router-dom";

const Categories = ({name,image,price,rating}) => {
  
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<img src={image} alt="Shoes" className="rounded-xl" />

</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">{name}</h2>
<p>Price: ${price}</p>
<p>Rating: {rating}</p>
<div className="card-actions">
  <Link to={`/book/`}>
  <button className="btn btn-primary">View Details</button>
  </Link>
</div>
</div>
</div>
);
};

export default Categories;