import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    
    const [blog, setBlog] = useState([
        {title: 'Why did Microsoft not abort the abomination known as Windows Vista', content: 'Welcome to my blog, lorem ipsum.......', author:'Bill Gates', id: 1},
        {title: 'Why did I divorce my wife? Hidden truth revealed.', content: 'Im rich and famous lorem ipsum....', author:'Jeff Bezos', id: 2},
        {title: 'Why were iPhone 4 users subjected to torture by updating their devices to iOS 7?', content: 'I made apple and now im rich lorem upsum....', author:'Steve Jobs', id: 3}
    ]);
const handleDelete = (id) =>{
    const newBlogs = blog.filter(blog => blog.id !== id)
        setBlog(newBlogs)
}

useEffect(() => {
    console.log('useEffect is working properly')
})


    return (
        <div className='home'>
            <BlogList blog={blog} title="All Blogs!" handleDelete={handleDelete} />
        </div>
    )
}

export default Home
