import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from 'draft-js';
import {TextField} from '@material-ui/core';
import Header from './Header';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const blog_url = "https://60c5d70fec8ef800175e1837.mockapi.io/blogs";

function AddBlog() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [blogName, setBlogName] = useState("");

    const onSave = () => {
        let content = convertToRaw(editorState.getCurrentContent())
        if(!blogName) {
            alert("Blog Name is required");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ blogContent: content, blogName })
        };

        fetch(blog_url, requestOptions)
        .then(res => {
            setEditorState(EditorState.createEmpty());
            setBlogName("");
            alert("Blog Saved")
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="add-blog-container">
            <Header>
                <h1 className="add-blog-header" align="center">Add Blog</h1>
            </Header>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={(editorState) => setEditorState(editorState)}
            />
            <div className="blog-name-container">
                <TextField
                    id="outlined-full-width"
                    label="Blog Name"
                    style={{ margin: 8 }}
                    placeholder="Enter Blog Name"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={blogName}
                    onChange={e => setBlogName(e.target.value)}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onSave}
                    startIcon={<SaveIcon />}>
                    Save
                </Button>
            </div>
        </div>
    );
}

export default AddBlog;