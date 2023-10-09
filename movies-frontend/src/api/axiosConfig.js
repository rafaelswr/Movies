import axios from "axios";


export default axios.create({
    baseURL:"https://b9bc-2001-8a0-f74a-b700-b639-b651-9574-fc2.ngrok-free.app", 
    headers:{"ngrok-skip-browser-warning":"true"}
});