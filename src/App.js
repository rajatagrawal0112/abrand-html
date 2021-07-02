import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch, Link} from 'react-router-dom';
import bookADemo from './pages/book-a-demo';
import brands from './pages/brands';
import Index from './pages/index';
import influencers from './pages/influencers';
import pricing from './pages/pricing';
import retailAndEcommerce from './pages/retaill-and-ecommerce'
import signup from './pages/signup'


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/bookADemo" component={bookADemo} />
          <Route path="/brands" component={brands} />
          <Route path="/influencers" component={influencers} />
          <Route path="/pricing" component={pricing} />
          <Route path="/retailAndEcommerce" component={retailAndEcommerce} />
          <Route path="/signup" component={signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
