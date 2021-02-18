import { Link } from 'react-router-dom' 
import GoogleBtn from './GoogleBtn'
import Popup from 'react-popup'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Tech Celebrity Blog</h1>
            <div className='links'>               
                <Link to='/'>Home</Link>
                <Link to='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    border: '8px'
                }}>New Blog</Link>
                {/* <button onClick={() => GoogleBtn()} style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    border: '8px',
                    marginLeft: '16px',
                    borderRadius: '6px 6px 6px 6px'
                }}>Login</button> */}
            </div>
            
        </nav>
    );
}

export default NavBar;