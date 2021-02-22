import { Link } from 'react-router-dom' 
import Popup from 'react-popup'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1 className="websiteName"><a href="/">React Demo Blog</a></h1>
            <div className='links'>               
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    border: '8px'
                }}>New Blog</Link>
            </div>
            
        </nav>
    );
}

export default NavBar;