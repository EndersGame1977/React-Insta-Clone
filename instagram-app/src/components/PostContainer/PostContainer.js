import React from 'react';
import 'antd/dist/antd.css';
import './PostContainer.scss';
import { Icon, Avatar, Input, Divider } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'



const PostContainer = (props) => {
    const { username, imageUrl, thumbnailUrl, likes, timestamp } = props.data;
    const timestampDate = Date.parse(timestamp.replace("th", ""));
    return (
        <div className="post-container">
            <div >
                <div className="avatar-username">
                    <Avatar src={thumbnailUrl} shape="circle" size="large" />
                    <strong>{username}</strong>
                </div>
            </div>
            <div className="post-image">
                <div>
                    <img alt="image for post" src={imageUrl} />
                </div>
            </div>
            <div>
                <div className="heart-message">
                    <Icon type="heart" />
                    <Icon type="message" />
                </div>
            </div>
            <div>
                <div className="like-count">
                    <strong>{likes} Likes</strong>
                </div>
            </div>
            <div>
                <div className="comment-section">
                    {props.data.comments.map(item => {
                        return (
                            <CommentSection data={item} />
                        )
                    })}
                </div>
            </div>
            <div>
                <div className="time-stamp">
                    <Divider>{moment(timestampDate).fromNow()}</Divider>
                </div>
            </div>
            <div>
                <div className="add-comment">
                    <Input size="large" placeholder="Add a comment..." suffix={<Icon type="ellipsis" />} />
                </div>
            </div>
        </div>);
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired

    })
}



export default PostContainer;