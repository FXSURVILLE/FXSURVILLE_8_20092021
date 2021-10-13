import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import APropos from '../pages/APropos'
import Lodging from '../pages/Lodging'
import Error from '../pages/Error'



class Router extends React.Component {

    render(){
        const routes = [
            {
                path: "/",
                component : Home,
                exact: true
            },
            {
                path: "/logement/:id",
                component : Lodging
            },
            {
                path: "/a_propos",
                component : APropos ,
                exact : true
            },
            {
                path: "*",
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