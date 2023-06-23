import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        'content-length': '62',
        "Content-type": "application/json"
    }
})
