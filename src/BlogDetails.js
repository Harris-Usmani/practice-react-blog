import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoadingBlogs } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
    
    //A function to handle the deletion of the blogs.
    const handleClick = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {   //Fetches the data from the JSON server.
            method: 'DELETE',                               //Makes a DELETE request.
        }).then(() => {
            history.push('/')                               //Once the DELETE request is completed, it redirects users back to the homepage using promises.
        })
    }
    
    //Blog body
    return ( 
        <div className='blog-details'>
            { isLoadingBlogs && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div> { blog.body }</div>
                    <button onClick = {handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

//Exports
export default BlogDetails;
