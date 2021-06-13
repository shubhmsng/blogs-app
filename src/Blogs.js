import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const blog_url = "https://60c5d70fec8ef800175e1837.mockapi.io/blogs";
const useStyles = makeStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      margin: '0 auto'
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
});

function Blogs() {
    const classes = useStyles();
    const [blogs, setBlogs] = useState([]);
    const [filteredBlog, setFilteredBlogs] = useState([]);
    const [searchBlogText, setSearchBlogText] = useState("");

    useEffect(() => {
        fetch(blog_url)
        .then(res => res.json())
        .then(blogs => {
            setBlogs(blogs);
            setFilteredBlogs(blogs);
        })
        .catch(err => console.log(err));
    }, []);

    const filterBlogs = () => {
        if(!searchBlogText) {
            setFilteredBlogs(blogs);
        } else {
            setFilteredBlogs(blogs.filter(blog => blog.blogName?.toLocaleLowerCase().includes(searchBlogText.toLocaleLowerCase())));
        }
    }

    return(
        <React.Fragment>
            <Header >
                <h1 className="header" align="center">Blogs</h1>
            </Header>
            <div className="searchbar">
                <Paper className={classes.root}>            
                    <InputBase className={classes.input} placeholder="Search Blogs" onChange={e => setSearchBlogText(e.target.value)}/>
                    <IconButton className={classes.iconButton} aria-label="Search" onClick={filterBlogs}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>

            {filteredBlog && filteredBlog.map((blog, id) => 
                <Link
                    target="_blank"
                    key={"link-" + id}
                    to={{
                        pathname: "blogs/" + blog.blogName,
                        state: { blog }
                    }
                    }>
                    <Card blog={blog} key={id}/>
                </Link>)
            }
        </React.Fragment>
    );
}

export default Blogs;