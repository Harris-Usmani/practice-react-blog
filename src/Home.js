import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const { data: blog, isLoadingBlogs, error } = useFetch('http://localhost:8000/blogs') //Server url along with the location of the blogs.

    return (
        <div className='home'>
            { error && <div>{error}</div>}      {/* Uses conditional rendering. If the the left hand side of the code is true aka if there is an error then an error message will be displayed on the screen.*/}
            { isLoadingBlogs && <div>Loading blogs...</div>}      {/* Exactly the same thing as above, uses conditional rendering as well. */}
            {blog && <BlogList blog={blog} title="All Blogs!" />}
        </div>
    )
}

export default Home