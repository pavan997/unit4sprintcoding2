import React from 'react';
import {Route, Switch} from 'react-router-dom';

export const Routes = () =>{
    return (
        <>
        <Switch>
            <Route  exact path='/'>
                <h1>Home page of an online book store</h1>
            </Route>
            <Route path='/about'>
                <h1>About page</h1>
            </Route>
            <Route path='/books'>
                <h1>books page</h1>
            </Route>
              
        </Switch>

        </>
    )
}
