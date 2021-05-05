import React, { FC } from 'react';
import styled from 'styled-components';
import LeftNavigation from './LeftNavigation';

const WrapperArea = styled.div`
  display: flex;
`;

const ContentsArea = styled.div`
  display: flex;
`;

const PageWrapper: FC = ({ children }) => {
  return (
    <WrapperArea>
      <LeftNavigation />
      <ContentsArea>{children}</ContentsArea>
    </WrapperArea>
  );
};

export default PageWrapper;
