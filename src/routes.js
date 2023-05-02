import React, { /*useContext*/ } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
//import {IsAuthenticated} from "./auth";

import { Layout } from './components'
import * as Pages from './pages';

//import { Context } from './auth/AuthContext';

/*
const PrivateRoute = ({component: Component, ...rest}) => {
    const { authenticated } = useContext(Context);
    return <Route
        {... rest}
        
        render={props =>
            authenticated === true ? (
                <Component {... props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
};
*/

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Pages.Home} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;