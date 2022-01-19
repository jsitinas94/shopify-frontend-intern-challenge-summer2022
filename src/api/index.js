import axios from "axios";

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=5RvZaPtz0NBcMOI5AdoF27epQFAiY7y3lck1VJ3z"

const fetchImages = async () => {
    return axios({
        method: "GET", 
        url: `${API_URL}&count=15`,
    }).then((response) => response.data)
}

export { fetchImages };