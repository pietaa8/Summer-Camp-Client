import { useEffect, useState } from "react";

const ManageClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-twelve-server-eight.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    const handleApprove = (classId) => {
        // Update the status of the class to "approved" in the database
        fetch(`https://assignment-twelve-server-eight.vercel.app/classes/${classId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'approved' }),
        })
          .then(res => res.json())
          .then(data => {
            // Handle the response or perform any additional actions
            console.log('Class approved:', data);
          })
          .catch(error => {
            // Handle the error
            console.error('Error approving class:', error);
          });
      };
      
      const handleDeny = (classId) => {
        // Update the status of the class to "denied" in the database
        fetch(`https://assignment-twelve-server-eight.vercel.app/classes/${classId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'denied' }),
        })
          .then(res => res.json())
          .then(data => {
            // Handle the response or perform any additional actions
            console.log('Class denied:', data);
          })
          .catch(error => {
            // Handle the error
            console.error('Error denying class:', error);
          });
      };
    
      

    return (
        <div>
            <h2 className="text-center text-3xl">Manage Classes</h2>
            <table className="table">
                {/* Head */}
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classItem, index) => (
                        <tr key={classItem._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.image} alt="Class Image" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{classItem.name}</td>
                            <td>{classItem.instructorName}</td>
                            <td>{classItem.email}</td>
                            <td>{classItem.seats}</td>
                            <td>{classItem.price}</td>
                            <td>{classItem.status}</td>
                            <td>
                                <div className="flex justify-center space-x-2">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleApprove(classItem._id)}
                                        disabled={classItem.status !== "pending"}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDeny(classItem._id)}
                                        disabled={classItem.status !== "pending"}
                                    >
                                        Deny
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                    >
                                        Send Feedback
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;
