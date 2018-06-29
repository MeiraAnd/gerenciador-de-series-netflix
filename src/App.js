import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import Series from './Series';
import NewSeries from './NewSeries';

const Sobre = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <Link to='/' className="navbar-brand page-scroll">
                  <img src="images/logo.png" height="30" />
                </Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/sobre'>Sobre</Link>
                  </li>
                  <li>
                    <Link to='/nova-serie'>Nova série</Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>

        <Route exact path='/' component={ Home } />
        <Route path='/series/:genres' component={Series} />
        <Route exact path='/sobre' component={ Sobre } />
        <Route exact path='/nova-serie' component={ NewSeries } />
        
          
        </div>
      </Router>
    );
  }
}

export default App;
