import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostListItem from '../components/PostListItem';
import { fetchPosts } from '../redux/reducks';
import styled from 'styled-components';

const EmptyPostMessage = styled.p`
  text-align: center;
`;

function LatestPostPage(): JSX.Element {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsState.posts);
  const userPosts = useSelector(state => state.postsState.userPosts);
  const deletedPosts = useSelector(state => state.postsState.deletedPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [deletedPosts, userPosts]);

  return (
    <>
      {posts.length ? (
        posts.map(item => <PostListItem key={item.id} {...item} />)
      ) : (
        <EmptyPostMessage>
          Sorry, no posts yet. You can be the first! <Link href={'posts/new'}><a>Create your post</a></Link>
        </EmptyPostMessage>
      )}
    </>
  );
}

// export async function getStaticProps(): Promise<{ props: { allPosts: Array<object> } }> {
//   const res = await axios.get('https://simple-blog-api.crew.red/posts')
//   const posts = res.data
//   return {
//     props: { posts },
//   }
// };

export default LatestPostPage;
