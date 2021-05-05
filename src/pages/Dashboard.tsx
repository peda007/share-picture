import { FC } from 'react';
import { Button } from '@material-ui/core';
import useTheme from '../hooks/useTheme';

const Dashboard: FC = () => {
  const { theme, toPerfectFriends, toModernWorld } = useTheme();

  const changeTheme = () => {
    if (theme === 'theme-pf') {
      toModernWorld();
    } else {
      toPerfectFriends();
    }
  };

  return (
    <>
      <h1>대시보드</h1>
      <div>
        <Button variant="contained" color="primary" onClick={changeTheme}>
          테마 변경
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
