import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAddComment } from '../redux/reducks';
import styled from 'styled-components';

const Input = styled.input`
  width: 400px;
  height: 50px;
`;

const Button = styled.button`
  margin: 5px 0;
`;

interface CommentCreatorProps {
  id: string,
}

export default function CommentCreator({ id }: CommentCreatorProps) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  function onChangeHandler(e) {
    setComment(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    dispatch(userAddComment(id, comment));
    setComment('');

  }

  return (
    <>
      <form action="">
        <p>Type your comment here:</p>
        <p><Input type="text" name="comment-input" value={comment} onChange={onChangeHandler} /></p>
        <Button type='button' onClick={onSubmitHandler}>Submit</Button>
      </form>
    </>
  );
};
