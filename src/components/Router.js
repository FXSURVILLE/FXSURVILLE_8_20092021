import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import APropos from './APropos'
import Lodging from './Lodging'
import Error from './Error'



class Router extends React.Component {

    render(){
        const routes = [
            {
                path: '/',
                component : Home,
                exact: true
            },
            {
                path: '/logement/:id',
                component : Lodging
            },
            {
                path: '/about',
                component : APropos ,
                exact : true
            },
            {
                path: '*',
                component : Error ,
            },
        ]

        return(
            <Switch>
                {routes.map((route, index)=> (
                     <Route key={index} {...route} />
                ))}
            </Switch>
        )
    }

}

export default Router
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