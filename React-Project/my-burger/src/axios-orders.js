import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-824b8.firebaseio.com/'
})

export default instance;