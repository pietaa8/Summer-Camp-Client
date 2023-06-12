

import { useState, useEffect } from 'react';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://assignment-twelve-server-eight.vercel.app/users')
            .then(response => response.json())
            .then(usersData => {
                // Filter the instructors
                const instructorData = usersData.filter(user => user.role === 'instructor');
                setInstructors(instructorData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex justify-center mt-5">
            <div className="max-w-4xl mb-5">
                <h2 className="text-center text-3xl font-serif font-extrabold">Our Instructors</h2>
                <table className="w-full bg-white border border-gray-300 rounded">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Index</th>
                            <th className="py-2 px-4 border-b">Instructor Name</th>
                            <th className="py-2 px-4 border-b">Instructor Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructors.map((instructor, index) => (
                            <tr key={instructor._id}>
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{instructor.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b">{instructor.email}</td>
                               
            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructors;
