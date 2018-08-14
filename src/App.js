import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Affiche from './components/Homepage';
import Events from './components/Events';
import Kesako from './components/Kesako';
import Support from './components/Support';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/teleteton'} component={Affiche} />
          <Route path={process.env.PUBLIC_URL + '/Events'} component={Events} />
          <Route path={process.env.PUBLIC_URL + '/Kesako'} component={Kesako} />
          <Route path={process.env.PUBLIC_URL + '/Support'} component={Support} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
