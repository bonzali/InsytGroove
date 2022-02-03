import React from 'react';
import {Post} from "definitions/post";
import PostComment from "../PostComment";

type Props = {
    post : Post
}
function PostListItem({post} :Props) {
    return (
        <div className={'post-list-item'}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <PostComment postId={post.id} />
        </div>
    );
}

export default PostListItem;