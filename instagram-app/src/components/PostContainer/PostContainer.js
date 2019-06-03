import React from 'react';
import './PostContainer.scss';
import CommentSection from '../CommentSection/CommentSection'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;



const PostContainer = (props) => {
    return (
        <div>
            {props.posts.map(post => (
                <div>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                    <CommentSection comments={props.posts} />
                </div>
            ))}
        </div>
    );
};

export default PostContainer;