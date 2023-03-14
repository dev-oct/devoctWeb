const Blog = () => {

    console.log(window.location.pathname);
    const artName = window.location.pathname.split('/').pop();
    return (
        <div>
            <h2>Blog Templates !</h2>
            <p>{artName}</p>
        </div>
    );
}

export default Blog;