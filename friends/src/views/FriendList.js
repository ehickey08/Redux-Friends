import React, { useState, useEffect } from 'react'
import Friend from '../components/Friend'
import FriendForm from '../components/FriendForm'
import {useAxios, setAxiosAuthConfig} from 'useful-react-hooks'
import styled from 'styled-components'
let token = localStorage.getItem('token')

if(token)
    setAxiosAuthConfig({baseURL:`http://localhost:5000/api`, timeout: 2000, headers:{ Authorization: token.substring(1, token.length-1)} })

function FriendList (props) {
    const [isShowing, setIsShowing] = useState(false);
    const [editFriendInfo, setEditFriendInfo] = useState({name: '', age: '', email: '', id: ''});
    const [request, value, error, isLoading] = useAxios()
    
    const getFriends = () => {
        request.get('/friends', true)
    }

    useEffect(() => {
        getFriends()
    }, []);

    useEffect(() => {
        if(isLoading)
            setTimeout((isLoading) => {
                if(isLoading)
                    setIsShowing(true)
            }, 50)
        else
            setIsShowing(false)
    }, [isLoading])

    const updateForm = friend => {
        setEditFriendInfo(friend)
    }


    const addFriend = friend => {
        request.post(`/friends`, friend, true)
    }

    const editFriend = friend => {
        request.put(`/friends/${editFriendInfo.id}`, friend, true)
    }

    const removeFriend = id => {
        request.del(`/friends/${id}`, {}, true)
    }
    
    console.log(value)
    return (
        <div className ="friend_list">
            <FriendForm editFriend = {editFriend} addFriend={addFriend} editFriendInfo={editFriendInfo}/>
            {isShowing && <FetchCont>Fetching Friends</FetchCont>}
            {value && value.map(friend => 
                    <Friend 
                    key={friend.id}
                    id={friend.id} 
                    friend={friend}
                    updateForm={updateForm}
                    removeFriend={removeFriend}
                />
            )}
        </div>
    )
}

export default FriendList

const FetchCont = styled.h2`
    text-align: center;
`