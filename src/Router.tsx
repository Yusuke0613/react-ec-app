import { SiginUp } from './page/SiginUp';
import { SiginIn } from './page/SiginIn';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Auth from './Auth';

const Router = () => {
    return (
            <Switch>
                <Route path="/siginup"  exact component={SiginUp} />
                <Route path="/siginin"  exact component={SiginIn} />
                {/* add redirect for first page */}
                <Auth>
                    <Route path="/" exact component={Dashboard} />
                </Auth>
            </Switch>
    );
};

export default Router;