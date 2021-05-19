import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import PageWrapper from 'components/PageWrapper';
import TopNavigation from 'components/TopNavigation';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/theme';

const App: FC = () => {
  const [theme, setTheme] = useState(themes.antique);
  return (
    <ThemeProvider theme={theme}>
      <div id="app">
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
    </ThemeProvider>
  );
};

export default App;
