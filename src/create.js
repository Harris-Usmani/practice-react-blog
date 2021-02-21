import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Steve Jobs')
    const [isLoadingBlogs, setIsLoadingBlogs] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        setIsLoadingBlogs(true)

        fetch('http://localhost:8000/blogs', {          //Uses the fetch API to define where to get the data from.
            method: 'POST',        //Defines what kind of method to use. Here I'm using the POST request.
            headers: {'Content-Type': 'application/json'}, //Defines the content type thats being sent.
            body: JSON.stringify(blog)
        }).then (() => {        //Slapping on a promise because this is asynchronus. Can be useful for debugging on real world projects.
            console.log('New blog has been posted successfully.')
            setIsLoadingBlogs(false)
        })
    }

    //Form to create and enter stuff in a blog.
    return (
        <div className='createBlog'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog content: </label>
                <input type='text'
                required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Steve Jobs">Steve Jobs</option>
                    <option value="Jeff Bezos">Jeff Bezos</option>
                    <option value="Bill Gates">Bill Gates</option>
                </select>
                {!isLoadingBlogs && <button>Add Blog</button>}      {/*If isLoadingBlogs is false then the button just shows Add Blog. */}
                {isLoadingBlogs && <button disabled>Adding Blog...</button>}     {/*If isLoadingBlogs is true then the button shows a loading message and gets disabled for the time being.*/}
            </form>
        </div>
    );
}

export default Create
