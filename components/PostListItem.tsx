import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { deletePost, fetchPosts } from '../redux/reducks';
import styled from 'styled-components';

const PostsItemWrapper = styled.div`
  width: 80vw;
  margin: 10px auto;
  border: 1px solid black;
  padding: 10px 10px;
`;

const PostsItemTitle = styled.p`
  margin: 0;
  font-size: 1.25rem;
  font-weight: Bold;
`;

const Button = styled.button`
  margin: 0 10px;
`;

interface PostListItemProps {
  body: string,
  title: string,
  id: string,
}

export default function PostListItem({ body, title, id }: PostListItemProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  function deletePostHandler(id) {
    dispatch(deletePost(id));
    dispatch(fetchPosts);
  }

  function redirectToPostHandler(id) {
    router.push(`/posts/${id}`);
  }

  return (
    <PostsItemWrapper>
      <PostsItemTitle>{title}</PostsItemTitle>
      <p>{body}</p>
      <Button
        type={'button'}
        onClick={() => { redirectToPostHandler(id); }}
      >
        TO THE POST
      </Button>
      <Button
        type={'button'}
        onClick={() => { deletePostHandler(id); }}
      >
        DELETE POST
      </Button>
      <Button
        type={'button'}
        disabled
      >
        EDIT POST
      </Button>
    </PostsItemWrapper>
  );
}
