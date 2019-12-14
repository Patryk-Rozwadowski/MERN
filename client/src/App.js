import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavShared from './shared/Nav/index';
import HomeRoute from './routes/Home/index';
import SignUpRoute from './routes/SignUp/index';
import Users from './modules/Users/Users';
import ImagesRoute from './routes/Images/index';
import AddImageRoute from './routes/AddImage/index';

// TODO NavShared shouldn't be in login section
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomeRoute}/>
                <Route path='/users' exact component={Users}/>
                <Route path='/signup' exact component={SignUpRoute}/>
                <Route path='/images' exact component={ImagesRoute}/>
                <Route path='/addimage' exact component={AddImageRoute}/>
            </Switch>
            <NavShared/>
        </Router>
    );
};

export default App;
