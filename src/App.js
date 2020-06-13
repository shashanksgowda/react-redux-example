import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Post from './components/Post';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import  Navbar  from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
