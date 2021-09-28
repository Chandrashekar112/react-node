import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Signin from '../components/auth/Signin';
import Signup from '../components/auth/Signup';
import Home from '../layout/Home';
import Users from '../components/IAM/Users';
import Counter from '../components/auth/Counter';



const Routes = () => {
    return (<Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route exact path="/users" component={Users} />
         <Route exact path="/counter" component={Counter} />
       </Switch>
    )
}
export default Routes;