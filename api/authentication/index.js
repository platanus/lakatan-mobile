import axios from 'axios'

 
function signInApi({ email, password }) {
    return axios({
        method: "post",
        url: "localhost:3000/api/v1/sessions",
        data: {
            "user": {
                "email": email,
                "password": password
            }
        },
        headers: {
            "Content-type": "application/json"
        }
    })
}

const authenticactionApi = {
    signInApi
}

export default authenticactionApi