import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import Router from './Router'
import Header from './Header'
import Footer from './Footer'
// import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './Home'
// import APropos from './APropos'
// import Lodging from './Lodging'
// import Error from './Error'


// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//           <Switch>
//             <Route path="/">
//               <Home />
//             </Route>
//             <Route path="/a_propos">
//               <APropos />
//             </Route>
//             <Route path="/lodging">
//               <Lodging />
//             </Route>
//             <Route path="*">
//               <Error />
//             </Route>
//           </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

class App extends React.Component{
  render (){
    return (
      <div>
      <BrowserRouter>
        <Header />
        <Router/>
        <Footer />
      </BrowserRouter>
      </div>
    )
  }
}
export default App;
