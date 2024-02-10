import React from 'react'
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import {
  Switch,
  Route} from "react-router-dom";
  import Error from './Error';

function App() {
  return (
   <>
     <Navbar/>
    <Switch>

          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact /> 
          </Route>
          <Route>
            <Error /> 
          </Route>
        </Switch>
   
  
  </>

  );
}

export default App;
