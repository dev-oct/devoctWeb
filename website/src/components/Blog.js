import Navbar from "./Navbar";

const Blog = () => {

    console.log(window.location.pathname);
    const artName = window.location.pathname.split('/').pop();

    return (
        <>
            <Navbar />
            <div>
                <h2>Blog Templates !</h2>

            </div>
        </>

    );
}

export default Blog;