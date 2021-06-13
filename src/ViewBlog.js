import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useLocation } from 'react-router-dom';
import getFormatedUpdateTime from './formatTime.js';
import {stateToHTML} from 'draft-js-export-html'; 
import { convertFromRaw } from 'draft-js';

const blog_url = "https://60c5d70fec8ef800175e1837.mockapi.io/blogs";

function ViewBlog() {
    const [blog, setBlog] = useState({});
    const location = useLocation()
    let blogName = location.pathname;
    blogName = blogName.split("/blogs/");
    blogName = blogName[1];

    useEffect(() => {
        fetch(blog_url)
        .then(res => res.json())
        .then(blogs => blogs.forEach(b => {
            if(b.blogName === blogName) {
                setBlog(b);
            }
        }))
        .catch(err => console.log(err));
    }, [])


    const convertCommentFromJSONToHTML = text => stateToHTML(convertFromRaw(text));

    return (
        blog.blogName ? <div>
            <header aria-labelledby="blog name">
                <h1 align="center">{blog.blogName}</h1>
            </header>
            <section aria-labelledby="blog details" className="blog-details">
                <Avatar aria-labelledby="avatar" src={blog.avatar} alt="avatar"></Avatar>
                <div>
                    <div>{blog.name}</div>
                    <div>{getFormatedUpdateTime(blog.createdAt)}</div>
                </div>
            </section>
            <section aria-labelledby="blog content" dangerouslySetInnerHTML={{__html: convertCommentFromJSONToHTML(blog.blogContent)}}>
            </section>
        </div> : <div></div>
    );
}

export default ViewBlog;