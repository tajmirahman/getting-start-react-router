import './user.css'

const User = ({user}) => {
    const {name,id, email,phone}=user;
    return (
        <div className='user-container'>
            <h2>{name}</h2>
            <p>{id}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default User;