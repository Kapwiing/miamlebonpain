import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <Routes>
            {/* This endpoint will just return you to a dummy HTML with a simple heading tag */}
            <Route path='/health'>
                <h3>Le pain est en bonne santé.</h3>
            </Route>

            {/* All other routes will be defined here */}

            {/* Finally you will be redirected to a not found page */}
            <Navigate to='/not-found' />
        </Routes>
    );
};

export default Routing;