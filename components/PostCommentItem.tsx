import styled from 'styled-components';

const CommentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  margin: 5px auto;
`;

const CommentAvatarContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const CommentTextContainer = styled.div``;

interface PostCommentItemProps {
  body: string,
  id: string,
}

export default function PostCommentItem({ body, id }: PostCommentItemProps): JSX.Element {
  return (
    <CommentWrapper>
      <CommentAvatarContainer>
        <img src="/" alt="user logo" />
      </CommentAvatarContainer>
      <CommentTextContainer>
        <p>Comment from user <strong>{id}</strong></p>
        <p>{body}</p>
      </CommentTextContainer>
    </CommentWrapper>
  );
}
