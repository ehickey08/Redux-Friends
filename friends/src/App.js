import React, { Component } from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import FriendList from "./views (containers)/FriendList"
import Login from "./views (containers)/Login"
import {logout} from './actions'
import './App.css';

class App extends Component {
    logout = (log) => {
        if(log === 'Logout'){
            this.props.logout(log)
            localStorage.setItem("token", '')
        }
    }
    render(){
        const log = this.props.loggedIn ? "Logout" : "Login";
        return (
            <div className="App-container">
                <nav>
                    <NavLink to="/login" onClick ={() => this.logout(log)}>{log}</NavLink>
                    <NavLink to="/friends">MyFriends</NavLink>
                </nav>
                <h1>Store, Add, Update, and Delete Your Friends!</h1> 
                <Route path = "/login" component={Login} />
                <PrivateRoute path = "/friends" component={FriendList} />
            </div>
        );
    }
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render ={props => 
        localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login"/>
    } />
}

const mapStateToProps = (state) => ({
    loggedIn: state.login.loggedIn
})

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
