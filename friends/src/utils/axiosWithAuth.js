import axios from "axios"

export default function () {
    const token = localStorage.getItem("token")
    return axios.create({
        headers:{ Authorization: token},
        baseURL: `http://localhost:5000/api`
    })
}