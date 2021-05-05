import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/all';

const NavTopArea = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-main-header);
  padding: 7px 15px;
`;

const LogoButton = styled(Link)`
  color: var(--color-font-reverse);
  display: flex;
  align-items: center;
`;

const ProfileImageArea = styled.div`
  display: flex;
  width: 8rem;
  justify-content: space-around;
  align-items: center;
  color: var(--color-font-reverse);
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--color-main-contents);
`;

const LogoutButton = styled(Link)`
  display: flex;
  align-items: center;
`;

const TopNavigation: FC = () => {
  return (
    <>
      <NavTopArea>
        <LogoButton to="/">SHARE-PICTURE</LogoButton>
        <div></div>
        <ProfileImageArea>
          <ProfileImage />
          <span>peda007</span>
          <LogoutButton to="/logout">
            <IoMdLogOut />
          </LogoutButton>
        </ProfileImageArea>
      </NavTopArea>
    </>
  );
};

export default TopNavigation;
