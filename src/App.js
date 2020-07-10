import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Roomie from './views/Roomie';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/description" component={Roomie}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
