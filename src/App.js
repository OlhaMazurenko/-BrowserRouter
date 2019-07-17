import React from 'react';
import './App.css';
import Articles from './components/Articles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Authors from './components/Authors';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home page</Link><br />
          <Link to="/authors">Authors</Link><br />
          <Link to="/articles">Articles</Link>
        </nav>
        <Route path="/" exact render={() => <div>This is your home page!!</div>} />
        <Route path="/authors" exact component={Authors} />
        <Route path="/articles" exact component={Articles} />

        <Route path="/articles/:id" exact component={Article} />
      </BrowserRouter>
    </div>
  );
}

export default App;
