import React, { Component } from 'react'
import {connect} from "react-redux"

import Friend from '../components/Friend'
import FriendForm from '../components/FriendForm'
import {updateFriend, addFriend, deleteFriend, getFriends} from '../actions'

class FriendList extends Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount () {
        this.props.getFriends()
    }

    handleChanges = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = friend => {
        this.props.addFriend(friend)
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    updateFriend = friend => {
        this.props.updateFriend(friend)
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    deleteFriend = id => {
        this.props.deleteFriend(id)
    }

    updateForm = friend => {
        this.setState({
            friend
        })
    }
    render() {
        return (
            <div className ="friend_list">
                <FriendForm
                    handler={this.handleChanges}
                    postFriend={this.addFriend}
                    updateFriend={this.updateFriend}
                    friends = {this.props.friends}
                    friend = {this.state.friend}
                />
                {this.props.friends.map(friend => 
                     <Friend 
                        key={friend.id}
                        id={friend.id} 
                        friend={friend}
                        deleteFriend={this.deleteFriend} 
                        updateForm={this.updateForm}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    friends: state.friendManagement.friends,
    error: state.friendManagement.errorMessage,
    isGetting: state.friendManagement.isGetting,
    isAdding: state.friendManagement.isAdding,
    isUpdating: state.friendManagement.isUpdating,
    isDeleting: state.friendManagement.isDeleting,
})

const mapDispatchToProps = {
    updateFriend, 
    addFriend,
    deleteFriend,
    getFriends
}

FriendList.defaultProps = {
    friends: []
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList)
