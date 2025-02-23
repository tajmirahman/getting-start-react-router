import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2 className="text3xl">Navber Section</h2>
            <div className='gap'>

                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
           
                
            </div>
        </div>
    );
};

export default Header;