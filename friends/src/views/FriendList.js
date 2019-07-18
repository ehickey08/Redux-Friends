import React, { useState, useEffect } from 'react'
import Friend from '../components/Friend'
import FriendForm from '../components/FriendForm'
import {useAxios} from 'useful-react-hooks'

function FriendList (props) {
    const [editFriend, setEditFriend] = useState({name: '', age: '', email: '', id: ''});
    const [request, value, error, isLoading] = useAxios()

    useEffect(() => {
        request.get('/friends', true)
    }, []);

    const updateForm = friend => {
        setEditFriend(friend)
    }
    return (
        <div className ="friend_list">
            <FriendForm editFriend = {editFriend}/>
            {value && value.map(friend => 
                    <Friend 
                    key={friend.id}
                    id={friend.id} 
                    friend={friend}
                    updateForm={this.updateForm}
                />
            )}
        </div>
    )
}

export default FriendList
