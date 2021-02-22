//Imports
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>Apologies!</h2>
            <p>We couldn't find your desired page 😔</p>
            <Link to = "/">Back to the homepage...</Link>
        </div>
    );
}

//Exports
export default NotFound;