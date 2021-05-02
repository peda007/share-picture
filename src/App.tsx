import React, { FC, useState } from 'react';
import Navigation from 'components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './components/GlobalStyles';
import 'assets/theme/theme.scss';
import Contents from './pages/Contents';

const App: FC = () => {
  const [theme, setTheme] = useState('theme-pf');
  return (
    <div id="app" className={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation />
        <Contents>
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true}></Route>
          </Switch>
        </Contents>
      </BrowserRouter>
    </div>
  );
};

export default App;
