import axios from 'axios'


function signInApi() {
   return axios.get(
       'http://localhost:3000/users',
    )
}



const authenticactionApi = {
    signInApi
}


export default authenticactionApi