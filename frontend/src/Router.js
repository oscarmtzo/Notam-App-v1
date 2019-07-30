import React from 'react'
import { BrowserRouter, Switch ,Route } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/auth/Signup';

const Router = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
        </Switch>
        </BrowserRouter>
    )

}
export default Router