import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    
    const [blog, setBlog] = useState(null);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(true)
    const [error, setError] = useState(null)

//Error handling and API/Database fetch.
useEffect(() => {
    fetch('http://localhost:8000/blogs')  //Enter your API/DB url here.
        .then(response => {
            if (!response.ok){            //If response is NOT ok then it throws an error message.
                throw Error('Could not fetch the data. Error!')        //Customize your error message here.
            }
            return response.json()
        })
        .then ((data) => {
            setBlog(data)
            setIsLoadingBlogs(false)       //Stops the loading message.
            setError(null)                 //No error received obviously so it will be null. 
        })
        .catch((loadingError) => {         //.catch function for catching errors.
            setError(loadingError.message) //Basically assigns the error message to to set error so it can be rendered onto the website.
            setIsLoadingBlogs(false)       //Will not display the loading message since an error has occured. 
        })
}, []) //<------ Dependency arrary 


    return (
        <div className='home'>
            { error && <div>{error}</div>}      {/* Uses conditional rendering. If the the left hand side of the code is true aka if there is an error then an error message will be displayed on the screen.*/}
            { isLoadingBlogs && <div>Loading blogs...</div>}      {/* Exactly the same thing as above, uses conditional rendering as well. */}
            {blog && <BlogList blog={blog} title="All Blogs!" />}
        </div>
    )
}

export default Home