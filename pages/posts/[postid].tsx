import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import PostDetail from '../../components/PostDetail';
import styled from 'styled-components';

const PostWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export default function Post(): JSX.Element {
  const router = useRouter();
  const { postid } = router.query;
  const posts: Array<useSelector> = useSelector(state => state.postsState.posts);
  return (
    <PostWrapper>
      {posts.map((item, itemIndex) => item.id === Number(postid) ? <PostDetail key={itemIndex} {...item} /> : null)}
      <button onClick={() => {router.push('/');}}>Go back</button>
    </PostWrapper>
  );
}
