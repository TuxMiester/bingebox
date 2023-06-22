import axios from 'axios'

const instance = axios.create({
    baseURL:'https://hu-23-gurugram-react-mockapi-urtjok3rza-wl.a.run.app'
})

export default instance;