import { useEffect, useState } from "react";


const SelectedClasses = () => {
    const [selectedClasses,setSelectedClasses]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/selectedclasses')
        .then(res=>res.json())
        .then(data=>setSelectedClasses(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl">My Selected Classes</h2>
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
                        <th>Delete</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses.map((classItem, index) => (
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
                            <td>{classItem.userEmail}</td>
                            <td>{classItem.seats}</td>
                            <td>{classItem.price}</td>
                            <td>
                        
                                    <button
                                        className="btn btn-primary"
                                       
                                    >
                                        Delete
                                    </button>
                                    </td>
                                    <td>
                                    <button  className="btn btn-primary"
                                       
                                    >
                                        Pay
                                    </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SelectedClasses;