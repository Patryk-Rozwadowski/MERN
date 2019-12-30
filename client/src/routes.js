import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeRoute from './routes/Home/index';
import SignUpRoute from './routes/SignUp/index';
import UsersRoute from './routes/Users/index';
import UserImagesListRoute from './routes/UserImagesList/index';
import AddImageRoute from './routes/AddImage/index';
import SignInRoute from './routes/SignIn/index';
import AllImagesRoute from './routes/AllImages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomeRoute}/>
                <Route path='/users' exact component={UsersRoute}/>
                <Route path='/signup' exact component={SignUpRoute}/>
                <Route path='/signin' exact component={SignInRoute}/>
                <Route path='/addimage' exact component={AddImageRoute}/>
                <Route path='/images' exact component={AllImagesRoute}/>
                <Route path='/:id/images' exact component={UserImagesListRoute}/>
            </Switch>
        </Router>
    )
};

export default Routes;
