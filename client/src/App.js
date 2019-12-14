import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomeRoute from './routes/Home/index';
import SignUpRoute from './routes/SignUp/index';
import UsersRoute from './routes/Users/index';
import ImagesRoute from './routes/Images/index';
import AddImageRoute from './routes/AddImage/index';

// TODO NavShared shouldn't be in login section
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomeRoute}/>
                <Route path='/users' exact component={UsersRoute}/>
                <Route path='/signup' exact component={SignUpRoute}/>
                <Route path='/images' exact component={ImagesRoute}/>
                <Route path='/addimage' exact component={AddImageRoute}/>
            </Switch>
        </Router>
    );
};

export default App;
