import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(132, 200, 239);
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;

const HeaderLogo = styled.span`
  font-size: 2rem;
  font-weight: Bold;
`;

const StyledCreatePostLink = styled.a`
  border: 5px solid white;
  padding: 5px;
  cursor: pointer;
  :hover {
    color: red;
    border: 5px solid black;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <HeaderLogo>
        FaceJournal - your personal blog
      </HeaderLogo>
      <Link href={'/posts/new'}>
        <StyledCreatePostLink>Create your post!</StyledCreatePostLink>
      </Link>
    </Wrapper>
  );
}
