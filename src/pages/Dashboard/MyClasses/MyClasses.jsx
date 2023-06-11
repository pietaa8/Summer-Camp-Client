import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/classes?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setMyClasses(data));
  }, []);

  return (
    <div>
      <h2>My Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Class Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th className="mr-2">Status</th>
            <th>Total Enrolled Students</th>
            <th>Feedback</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((myClass, index) => (
            <tr key={myClass._id}>
              <td>{index + 1}</td>
              <td>{myClass.name}</td>
              <td>{myClass.seats}</td>
              <td>{myClass.price}</td>
              <td>{myClass.status}</td>
              <td>0</td>
              <td>{myClass.status === "denied" ? myClass.feedback : "-"}</td>
              <td>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
