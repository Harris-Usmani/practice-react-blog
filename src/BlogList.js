const BlogList = (props) => {
    const blog = props.blog
    const title = props.title
    const handleDelete = props.handleDelete

    return (
        <div className='blog-list'>
        <h2>{ title }</h2>
        {blog.map((blog) => (
            <div className='Blog-Preview' key={blog.id}>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </div>
        ))};
        </div>
    );
}

export default BlogList;