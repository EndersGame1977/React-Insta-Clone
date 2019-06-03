import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.comments.map(comment => (
                <h1>{comment.id}</h1>
            ))}
        </div>
    );
};

export default CommentSection;