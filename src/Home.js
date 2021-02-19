import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    
    const [blog, setBlog] = useState(null);
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(true)
    
//Depreciated blog delete functionality below. The prop for this functionality has been deleted.

// const handleDelete = (id) =>{
//     const newBlogs = blog.filter(blog => blog.id !== id)
//         setBlog(newBlogs)
// }

useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then ((data) => {
            setBlog(data)
            setIsLoadingBlogs(false)
        })
}, []) //<------ Dependency arrary 


    return (
        <div className='home'>
            { isLoadingBlogs && <div>Loading blogs...</div>}
            {blog && <BlogList blog={blog} title="All Blogs!" />}
        </div>
    )
}

export default Home