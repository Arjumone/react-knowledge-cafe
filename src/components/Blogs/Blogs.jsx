import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookMarks,handleReadTime}) => {
    const [blogs,setBlogs]= useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl font-semibold text-center">All Blogs are here</h1>
            <div className="">
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookMarks={handleAddToBookMarks} handleReadTime={handleReadTime}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookMarks:PropTypes.func.isRequired,
    handleReadTime:PropTypes.func.isRequired,
}

export default Blogs;