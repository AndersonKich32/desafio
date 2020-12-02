import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './App'

 export default function Routes(){
     return(
         <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
         </BrowserRouter>
     )
 }