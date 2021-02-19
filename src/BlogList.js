const BlogList = (props) => {
    const blog = props.blog
    const title = props.title

    return (
        <div className='blog-list'>
        <h2 style={{textAlign: 'center'}}>{ title }</h2>
        {blog.map((blog) => (
            <div className='Blog-Preview' key={blog.id}>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author}</p>
            </div>
        ))};
        </div>
    );
}

export default BlogList;