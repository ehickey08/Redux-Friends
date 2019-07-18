import React, {useState, useEffect} from 'react'
import {useAxios} from 'useful-react-hooks'
import styled from 'styled-components'

function FriendForm (props) {
    const [isEditing, setIsEditing] = useState(false);
    const [friend, setFriend] = useState({name: '', age: '', email: ''});
    const [request, value, error, isLoading] = useAxios()

    useEffect(() => {
        setIsEditing(true)
    }, [props.editFriend]);

    const changeHandler = (e) => {
        setFriend({...friend, [e.target.name]: e.target.value})
    }
    return (
        <FormDiv onSubmit = {(event) => {
            event.preventDefault();
            if(isEditing) 
                request.put(`/friends/${props.editFriend.id}`, friend, true)
            else 
                request.post(`/friends`, friend, true)
                
        }}>
            <input
                type="text"
                name="name" 
                onChange = {changeHandler}
                value = {friend.name}
                placeholder = "Name"
            />
            <input 
                type="text"
                name="age" 
                onChange = {changeHandler}
                value = {friend.age}
                placeholder = "Age"
            />
            <input
                type="text" 
                name="email" 
                onChange = {changeHandler}
                value = {friend.email}
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