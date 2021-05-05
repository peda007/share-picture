import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLeftArea = styled.div`
  display: flex;
  flex-basis: 200px;

  background-color: var(--color-main-contents);
  height: calc(100vh - 38px);
`;

const LeftMenuArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftNavigation = () => {
  return (
    <NavLeftArea>
      <LeftMenuArea>
        <Link to="/">Dashboard</Link>
        <Link to="/rooms">Rooms</Link>
      </LeftMenuArea>
    </NavLeftArea>
  );
};

export default LeftNavigation;
