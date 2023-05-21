
const ToyRow = ({toy}) => {
   const {toyName,email,image,SellerName,category,price,quantity} = toy;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
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