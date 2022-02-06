import React, { useEffect, useState, useRef } from 'react';
import { getPostComments, postComment } from '../../api/post';
import { Comment } from '../../definitions/photo';
import './PostComment.scss';
type Props = {
  postId: number;
};

function PostComment({ postId }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [editComment, setEditComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const result = await getPostComments(postId);
        console.log(result);
        setComments(result);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [postId]);

  const addComment = async () => {
    try {
      const newComment: Comment = {
        postId: postId,
        name: 'esoko',
        id: Date.now(),
        email: 'esoko@gmail.com',
        body: editComment,
      };
      setEditComment('');
      //save new comment
      await postComment(newComment, postId);
      setComments([...comments, newComment]);
      elementRef.current?.scrollTo(0, elementRef.current?.clientHeight);
    } catch (e) {}
  };
  return (
    <div className={'PostComment'}>
      <h6>Comments</h6>
      <div ref={elementRef} className={'comment-container'}>
        {comments.map((item) => (
          <div key={item.id} className={'comment'}>
            <h5>{item.email}</h5>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div className={'add-comment'}>
        <input
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              addComment();
            }
          }}
          value={editComment}
          onChange={(e) => setEditComment(e.target.value)}
          placeholder={'add comment'}
        />
        <button onClick={() => addComment()}>add</button>
      </div>
    </div>
  );
}

export default PostComment;
