import './App.css';
import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Resume from './Resume';
import Blogs from './Blogs';
import ViewBlog from './ViewBlog';
import AddBlog from './AddBlog';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blog/new" component={AddBlog} />
          <Route exact path="/blogs/*" component={ViewBlog} />
          <Route exact path="/" component={Resume} />
        </Switch>
      </Router>
  );
}

export default App;
