import { useQuery } from "react-query";


const ManageUsers = () => {

    const {data: users=[], refetch}=useQuery(['users'],async()=>{
        const res= await fetch('http://localhost:5000/users')
        return res.json();
    });
    return (
        <div>
            {users.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=><tr
                            key={user._id}>
                            
                                <td>{index+1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>Role</td>
                                <td>
                                <button className="btn btn-primary mr-2"> Make Admin</button>
                                <button className="btn btn-primary"> Make Instructor</button>
                                </td>
                              
                               
                            </tr>
                         )
                        }
                        {/* row 1 */}
                        
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageUsers;