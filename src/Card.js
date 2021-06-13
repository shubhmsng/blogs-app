import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import getFormatedUpdateTime from './formatTime.js';
import {stateToHTML} from 'draft-js-export-html'; 
import { convertFromRaw } from 'draft-js';


function CardComponent({blog}) {
    
    const convertCommentFromJSONToHTML = text => {
        let htmlData = stateToHTML(convertFromRaw(text));
        htmlData = htmlData.match(/<p>(.*?)<\/p>/g);
        if(htmlData.length > 1) {
            htmlData = htmlData[0];
        }
        return htmlData;
    };

    return (
        <Card className="card">
            <div className="card-container">
                <div>
                    <CardHeader
                        avatar={
                            <Avatar aria-labelledby="avatar" src={blog.avatar} alt="avatar">
                            </Avatar>
                        }
                        title={blog.name}
                        subheader={getFormatedUpdateTime(blog.createdAt)}
                    />

                    <CardContent>
                        <h4>{blog.blogName}</h4>
                        <p className="content" aria-labelledby="message" dangerouslySetInnerHTML={{__html: convertCommentFromJSONToHTML(blog.blogContent)}}></p>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

export default React.memo(CardComponent);