import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Router from './Router'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component{
  render (){
    return (
      <div>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
      </div>
    )
  }
}
export default App;
