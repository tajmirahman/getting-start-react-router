import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user= useLoaderData();

    return (
        <div>
            <h1>This is User Details Page</h1>
            <p>{user.name}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserDetails;