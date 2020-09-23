import PostCreator from '../../components/PostCreator';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

export default function CreateNewPostPage() {
  return (
    <>
      <Title>Create your own post in our form!</Title>
      <PostCreator />
    </>
  );
}
