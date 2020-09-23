import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/reducks';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 50vw;
  margin: 10px auto;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 5px;
`;

export default function PostCreator() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userMessageTitle, setUserMessageTitle] = useState('');
  const [userMessage, setUserMessage] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!userMessageTitle.length) {
      alert('Your title cannot be empty!');
    } else if (!userMessage.length) {
      alert('Your message cannot be empty!');
    } else {
      dispatch(addPost(userMessageTitle, userMessage));
      router.push('/');
    }
  }

  function onGoBackHandler(e) {
    e.preventDefault();
    router.push('/');
  }

  return (
    <FormWrapper>
      <form action={''}>
        <p>Write a title for your message</p>
        <input
          type="text"
          name={'postTitle'}
          onChange={e => {setUserMessageTitle(e.target.value);}}
          value={userMessageTitle}
        />
        <p>Write a message</p>
        <input
          type="text"
          name={'postText'}
          onChange={e => {setUserMessage(e.target.value);}}
          value={userMessage}
        />
        <p>
          <Button type={'button'} onClick={onSubmitHandler}>Submit</Button>
          <Button type={'button'} onClick={onGoBackHandler}>Go back</Button>
        </p>
      </form>
    </FormWrapper>
  );
}
