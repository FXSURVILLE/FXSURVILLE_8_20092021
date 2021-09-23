import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import APropos from './APropos'
import Lodging from './Lodging'
import Error from './Error'


export default function App() {
  return (
    <Router>
      <div>
        <Header />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/a_propos">
              <APropos />
            </Route>
            <Route path="/lodging">
              <Lodging />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// export default App;
