import axios from 'axios'

const baseURL = 'http://localhost:3000'
//const baseURL = 'http://nombre_en_heroku.herokuapp.com/api'

class AuthService {
    constructor(){
        this.service = axios.create({
            baseURL, 
            withCredentials: true
        })
    }
    signup(data){
        return this.service.post('/signup', data)
    }
    login(data){
        return this.service.post('/login', data)
    }
    logout(data){
        return this.service.get('/logout')
    }
}
export default AuthService