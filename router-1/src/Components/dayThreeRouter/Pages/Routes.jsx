import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Welcome from './HomePage.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Setting from './Setting.jsx'

function Routes() {
    return (
        <div>
            <Welcome />
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/dashboard/setting">
                    <Setting />
                </Route>

            </Switch>
        </div>
    )
}

export default Routes
