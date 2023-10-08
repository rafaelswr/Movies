import axios from "axios";


export default axios.create({
    baseURL:"https://97e2-2001-8a0-f74a-b700-7153-480b-e02-74d1.ngrok-free.app", 
    headers:{"ngrok-skip-browser-warning":"true"}
});