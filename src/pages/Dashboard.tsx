import { FC } from 'react';
import { Button } from '@material-ui/core';

const Dashboard: FC = () => {
  return (
    <>
      <h1>대시보드</h1>
      <div>
        {/*<Button variant="contained" color="primary" onClick={changeTheme}>*/}
        <Button variant="contained" color="primary">
          테마 변경
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
