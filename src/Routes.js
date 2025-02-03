import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            {/* This endpoint will just return you to a dummy HTML with a simple heading tag */}
            <Route path="/health">
                <h3>Hey There!!! The App is Healthy</h3>
            </Route>

            {/* All other routes will be defined here */}

            {/* Finally you will be redirected to a not found page */}
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;