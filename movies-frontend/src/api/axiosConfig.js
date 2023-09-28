import axios from "axios";

export default axios.create({
    baseURL:"https://7733-2001-8a0-f74a-b700-a558-8982-ed1b-779d.ngrok-free.app", 
    headers:{"ngrok-skip-browser-warning":"true"}
});