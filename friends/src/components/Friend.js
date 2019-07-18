import React from 'react'
import styled from 'styled-components'
import {useAxios} from 'useful-react-hooks'
const Friend = props => {
    const [request, values, error, isLoading] = useAxios()
    return (
        <FriendDiv>
            <div>
                <FriendSpan>Name: {props.friend.name}</FriendSpan>
                <FriendSpan>Age: {props.friend.age}</FriendSpan>
                <FriendSpan>Email: {props.friend.email}</FriendSpan>
            </div>
            <UpdateButton onClick = {() => props.updateForm(props.friend)}>Update</UpdateButton>
            <DeleteButton onClick ={() => props.removeFriend(props.friend.id)}>Delete</DeleteButton>
        </FriendDiv>
    )
}

const FriendDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto;
    width: 35%;

    div{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`

const FriendSpan = styled.span`
    font size: 20px;
    font-family: 'Oswald', sans-serif;
`

const UpdateButton = styled.button`
    height: 30px;
    background: #0B2818
    color: white;
    
    &:hover{
        background: rgba(66,94,78, 0.4);
        font-weight: 600;
        color: black;
    }
`

const DeleteButton = styled(UpdateButton)`
`
export default Friend
