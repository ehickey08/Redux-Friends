import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom'
import FriendList from "./views/FriendList"
import Login from "./views/Login"
import './App.css';

function App () {
    // const [loggedIn, setLoggedIn] = useState('LogIn');
    
    // const log = this.props.loggedIn ? "Logout" : "Login";
    
    // const logout = (log) => {
    //     if(log === 'Logout'){
    //         this.props.logout(log)
    //         localStorage.setItem("token", '')
    //     }
    // }
    
    return (
        <div className="App-container">
            <nav>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/friends">MyFriends</NavLink>
            </nav>
            <h1>Store, Add, Update, and Delete Your Friends!</h1> 
            <Route path = "/login" component={Login} />
            <PrivateRoute path = "/friends" component={FriendList} />
        </div>
    )
}

const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render ={props => 
        localStorage.getItem("token") ? <Component {...props} /> : <Redirect to="/login"/>
    } />
}

export default App;
