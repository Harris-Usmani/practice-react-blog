import { Link } from 'react-router-dom' 

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
            </div>
        </nav>
    );
}

export default NavBar;