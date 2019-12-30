import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeRoute from './routes/Home/index';
import SignUpRoute from './routes/SignUp/index';
import UsersRoute from './routes/Users/index';
import ImagesRoute from './routes/Images/index';
import AddImageRoute from './routes/AddImage/index';
import SignInRoute from './routes/SignIn/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomeRoute}/>
                <Route path='/users' exact component={UsersRoute}/>
                <Route path='/signup' exact component={SignUpRoute}/>
                <Route path='/signin' exact component={SignInRoute}/>
                <Route path='/addimage' exact component={AddImageRoute}/>
                <Route path='/images' exact component={ImagesRoute}/>
                <Route path='/:id/images' exact component={ImagesRoute}/>
            </Switch>
        </Router>
    )
};

export default Routes;
