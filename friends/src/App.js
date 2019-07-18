import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom'
import FriendList from "./views/FriendList"
import Login from "./views/Login"
import './App.css';

function App () {
    return (
        <div className="App-container">
            <nav>
                <NavLink to="/">Login</NavLink>
                <NavLink to="/friends">My Friends</NavLink>
            </nav>
            <h1>Store, Add, Update, and Delete Your Friends!</h1> 
            <Route exact path = "/" component={Login} />
            <PrivateRoute path = "/friends" component={FriendList} />
        </div>
    )
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render ={props => 
        localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/"/>
    } />
}

export default App;
