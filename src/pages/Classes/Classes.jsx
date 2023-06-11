import { useState, useEffect } from 'react';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(response => response.json())
            .then(classesData => {
                // Filter the approved classes
                const approvedClasses = classesData.filter(classData => classData.status === 'approved');
                setClasses(approvedClasses);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch request
                console.error(error);
            });
    }, []);

    return (
        <div className="flex justify-center mt-5">
            <div className="max-w-4xl mb-5">
                <h2 className="text-center text-3xl font-serif font-extrabold">Our Best Classes</h2>
                <table className="w-full bg-white border border-gray-300 rounded">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Index</th>
                            <th className="py-2 px-4 border-b">Class Name</th>
                            <th className="py-2 px-4 border-b">Instructor Name</th>
                            <th className="py-2 px-4 border-b">Available Seats</th>
                            <th className="py-2 px-4 border-b">Price</th>
                            <th className="py-2 px-4 border-b">Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((classData, index) => (
                            <tr key={classData._id}>
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classData.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classData.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">{classData.instructorName}</td>
                                <td className="py-2 px-4 border-b">{classData.seats}</td>
                                <td className="py-2 px-4 border-b">{classData.price}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="btn btn-primary">Select</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Classes;
