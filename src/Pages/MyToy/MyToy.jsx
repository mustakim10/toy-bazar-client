import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyRow from "./ToyRow";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [myToy,setMyToy] = useState([]);

    const url = `http://localhost:5000/myToys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToy(data))
    },[]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/myToys${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successful');
                        const remaining = myToy.filter(toy => toy._id !== id);
                        setMyToy(remaining);

                    }
                })
        }
    }

    return (
        <div>
            <h2>my toys are coming: {myToy.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>toyName</th>
        <th>Seller Name</th>
        <th>email</th>
        <th>category</th>
        <th>price</th>
        <th>quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        myToy.map(toy => <ToyRow
        key={toy._id}
        toy={toy}
        handleDelete={handleDelete}
        ></ToyRow>)
    }
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyToy;