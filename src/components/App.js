import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Error from './Error'
import Footer from './Footer'

export default function App() {
  return (
    <Router>
      <div>
        <Header />
          <Switch>
            <Route path="/">
              <Home />
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
