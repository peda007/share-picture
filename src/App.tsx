import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import 'assets/theme/theme.scss';
import 'assets/theme/material';
import PageWrapper from 'components/PageWrapper';
import TopNavigation from 'components/TopNavigation';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import useTheme from './hooks/useTheme';

const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div id="app" className={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <TopNavigation />
        <PageWrapper>
          <Switch>
            <Route path="/" component={Dashboard} exact={true}></Route>
            <Route path="/rooms" component={Rooms} exact={true}></Route>
          </Switch>
        </PageWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
