import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useInstructor=()=>{
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data : isInstructor,isLoading: isAdminLoading}=useQuery({
        queryKey: ['isInsturctor',user?.email],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('is instructor response',res)
            return res.data.instructor;
        }
    })
    return[isInstructor,isAdminLoading]

}
export default useInstructor;