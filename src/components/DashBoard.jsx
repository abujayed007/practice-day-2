import { useLoaderData } from "react-router-dom";
import User from "./User";


const DashBoard = () => {
    const users = useLoaderData()
    return (
        <div className="my-10">
           <h1 className="md:text-4xl sm:text-2xl font-semibold text-center my-5">Total Users :{users.length}</h1>
           <div className=" p-14 shadow-2xl rounded-xl ">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default DashBoard;