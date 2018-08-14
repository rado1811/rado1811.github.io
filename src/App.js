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
          <Route exact path="/" component={Affiche} />
          <Route path="/Events" component={Events} />
          <Route path="/Kesako" component={Kesako} />
          <Route path="/Support" component={Support} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
