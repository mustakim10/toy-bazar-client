
const ToyRow = ({ toy,handleDelete}) => {
    const {_id, toyName, email, image, SellerName, category, price, quantity } = toy;
    
    

       return(
        <tr>
        <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{toyName}</div>

                </div>
            </div>
        </td>
        <td>
            {SellerName}

        </td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>
       );
    
};

export default ToyRow;