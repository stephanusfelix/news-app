import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/main'
import Saved from '../pages/saved'

export default class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route  path="/saved" component={Saved}/>
                <Route  path="/:category" component={Main}/>
            </Switch>
        )
    }
}