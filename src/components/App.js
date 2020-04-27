import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PostsList from "../views/PostsList";
import Login from "../views/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={PostsList} />
                    <Route path="/login" exact component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
