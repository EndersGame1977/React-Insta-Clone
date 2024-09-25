import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';


const CommentSection = (props) => {
    const { username, text } = props.data;
    return (
        <div>
            <div>
                <div>
                    <div className="comments">
                        <strong>{username}  </strong>
                        {text}
                    </div>
                </div>
            </div>
        </div>
    );
};

CommentSection.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })
}

export default CommentSection;