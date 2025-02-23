import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users= useLoaderData();
    console.log(users) ;

    return (
        <div>
            <h2>This is users page</h2>
            <h3>all users- {users.length}</h3>

            <div className="users-container">
                {
                    users.map(user=> <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;