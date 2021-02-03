import React, { useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import Bio from './containers/Bio/Bio';
import Projects from './containers/Projects/Projects'
import Resume from './containers/Resume/Resume';
import './App.css';

const App = (props) => {
  const [page, setPage] = useState('/projects');


  return (
    <div className="App">
    <BrowserRouter>
        <Navbar page={page} setPage={setPage}></Navbar>
        <Header />
        <Switch>
          <Route path="/bio" component={Bio} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Redirect to="/projects" from="/" />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
