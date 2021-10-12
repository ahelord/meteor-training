import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AboutPage from "/app/ui/pages/AboutPage";
import HomePage from "/app/ui/pages/HomePage";

const Routes = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Routes;
