const Create = () => {
    return (
        <div className='createBlog'>
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title: </label>
                <input type='text'
                required
                />
                <h2>Add a New Blog</h2>
                <label>Blog content: </label>
                <textarea>
                    required
                </textarea>
                <label>Blog author:</label>
                <select>
                    <option value="Steve Jobs">Steve Jobs</option>
                    <option value="Jeff Bezos">Jeff Bezos</option>
                    <option value="Bill Gates">Bill Gates</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create
