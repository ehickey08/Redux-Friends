import React from 'react'
import styled from 'styled-components'

const FriendForm = props => {
    return (
        <FormDiv onSubmit = {(event) => {
            event.preventDefault();
            if(props.friends.find(friend => friend.id ===props.friend.id)) 
                props.updateFriend(props.friend)
            else 
                props.postFriend(props.friend)
        }}>
            <input
                type="text"
                name="name" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.name}
                placeholder = "Name"
            />
            <input 
                type="text"
                name="age" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.age}
                placeholder = "Age"
            />
            <input
                type="text" 
                name="email" 
                onChange = {(evt) => props.handler(evt)}
                value = {props.friend.email}
                placeholder = "Email"
            />
            <input 
                className = "submit"
                type="submit"
                value="Submit"
            />
        </FormDiv>
    )
}

const FormDiv = styled.form`
    width: 30%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px

    input{
        height: 15%;
        padding: 5px;
        border-radius: 5px;
        border-width: 1px;
    }
    
    input.submit{
        background: #0B2818
        color: white;
        
        &:hover{
            background: rgba(66,94,78, 0.4);
            font-weight: 600;
            color: black;
        }
    }
`

export default FriendForm