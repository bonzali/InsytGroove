import React, {useEffect} from 'react';
import "./postList.scss"
import {getPostList} from "api/post";
import {Post} from "definitions/post";
import PostListItem from "./PostListItem";
import Loader from "shared/components/Loader";

type Props = {
    userId: number
}

function PostList({userId}: Props) {
    const [isLoading, setIsLoading] = React.useState(true)
    const [posts, setPosts] = React.useState<Post[]>([])

    useEffect(() => {
        (async () => {
            try {
                const result = await getPostList(userId)
                setPosts(result)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                console.log(e)
            }        })()
    }, [userId])

    return (
        <div className={'PostList'}>
            {isLoading && <Loader/>}
            {posts.map(item => (
                <div key={item.id}>
                    <PostListItem post={item}/>
                </div>
            ))}
        </div>
    );
}

export default PostList;