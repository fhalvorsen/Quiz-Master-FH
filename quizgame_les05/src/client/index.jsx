import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Match from "./match"
import Home from "./home";
import Notfound from "./notfound";


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path={"/match"} component={Match}/>
                    <Route exact path={"/"} component={Home}/>
                    <Route path="*" component={Notfound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );

};
ReactDOM.render(<App/>, document.getElementById("root"));
