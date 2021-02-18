const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>Tech Celebrity Blog</h1>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/create' style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    border: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default NavBar;