import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './Article';
import Articles from './Articles';
import Contact from './Contact';
import Help from './Help';
import Home from './Home';
import NotFound from './NotFound';
import Peoples from './People';
import DataContext from './dataContext';

function Main() {
  const dataInfo = useContext(DataContext);
  return (
    <div className='page-content'>
      <Switch>
        <Route
          path='/'
          exact
          component={() => (
            <Home isLogin={dataInfo.isLogin} userInfo={dataInfo.userInfo} />
          )}
        />
        <Route path='/help' component={Help} />
        <Route
          path='/articles'
          exact
          component={() => (
            <Articles isLogin={dataInfo.isLogin} data={dataInfo.data} />
          )}
        />
        <Route
          path='/people'
          component={() => (
            <Peoples isLogin={dataInfo.isLogin} people={dataInfo.people} />
          )}
        />
        <Route path='/contact' component={Contact} />
        <Route
          path='/articles/:slug'
          component={({ match }) => (
            <Article isLogin={dataInfo.isLogin} slug={match.params.slug} />
          )}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default Main;
