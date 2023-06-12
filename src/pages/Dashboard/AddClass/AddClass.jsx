import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AddClass = () => {

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.className.value;
        const image = form.image.value;
        const instructorName =user.displayName;
        const email = user.email;
        const seats = form.seats.value;
        const price = form.price.value;

        const classes = { name, image, instructorName, email, seats, price, status: "pending", }

        fetch('https://assignment-twelve-server-eight.vercel.app/classes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classes)
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('class is added');
                }
            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl">Add Class</h2>
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="className" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text"
                        name="instructorName"
                        value={user.displayName}
                        readOnly
                        className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" value={user.email}
                        className="input input-bordered"
                        readOnly />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" name="seats" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" className="input input-bordered" />


                </div>
                <div className="form-control mt-6">

                    <button className="btn btn-primary" type="submit">Add</button>
                </div>





            </form>
        </div>
    );
};

export default AddClass;