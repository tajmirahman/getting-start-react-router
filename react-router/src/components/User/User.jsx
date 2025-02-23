import { Link } from 'react-router-dom';
import './user.css'

const User = ({user}) => {
    const {name,id, email,phone}=user;
    return (
        <div className='user-container'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;