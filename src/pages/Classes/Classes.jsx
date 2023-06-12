import { useState, useEffect, useContext } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import { AuthContext } from '../../providers/AuthProvider';

const Classes = () => {
    const [classes, setClasses] = useState([]);
     const [isAdmin] = useAdmin();
  const [isInstructor]=useInstructor();
    const { user } = useContext(AuthContext);

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

    const handleSelect = (classId,image,seats,name,instructorName,price) => {
        if (!user) {
            alert('Please log in before selecting the course.');
            return;
        }

        if (isAdmin) {
            alert('You cannot select this course as an admin.');
            return;
        }
        if (isInstructor) {
            alert('You cannot select this course as an instructor.');
            return;
        }

        if (seats === 0) {
            alert('No available seats for this course.');
            return;
        }

        // Performing the course selection logic here
        const SelectedClasses = {classId, name, image, instructorName, seats, price, userID: user._id, userEmail: user.email }

        fetch('http://localhost:5000/selectedclasses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(SelectedClasses)
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Selectedclass is added');
                }
            })
      

    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-3 justify-center mt-5">
                {classes.map(classData => (
                    <div className={`card w-96 ${classData.availableSeats === 0 ? 'bg-red-500' : 'bg-base-100'} shadow-xl`} key={classData.id}>
                        <figure><img src={classData.image} alt={classData.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classData.name}</h2>
                            <p>Instructor: {classData.instructorName}</p>
                            <p>Available seats: {classData.seats}</p>
                            <p>Price: {classData.price}</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    disabled={classData.seats === 0  || isAdmin || isInstructor}
                                    onClick={() => handleSelect(classData._id, classData.image, classData.seats,classData.name,classData.instructorName,classData.price)}
                                >
                                    {classData.seats === 0 ? 'Sold Out' : 'Select'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Classes;
