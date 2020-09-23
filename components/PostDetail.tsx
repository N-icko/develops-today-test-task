import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/reducks';
import CommentCreator from './CommentCreator';
import PostCommentItem from './PostCommentItem';
import styled from 'styled-components';

const EmptyComment = styled.p`
  font-style: italic;
`;

interface PostDetailProps {
  id: string,
  body: string,
  title: string,
}

export default function PostDetail({ id, body, title }: PostDetailProps): JSX.Element {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.postsState.postsComments);
  const userComments = useSelector(state => state.postsState.userComments);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [userComments]);


  return (
    <>
      <h1>Title: {title}</h1>
      <p>Message: {body}</p>
      {comments.length ? (comments.map(item => <PostCommentItem key={id} {...item} />)) : (
        <EmptyComment>Hey we dont have comment here! You can be the first!</EmptyComment>
      )}
      <CommentCreator id={id} />
    </>
  );
}
