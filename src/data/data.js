import axios from "axios";

const API_KEY = "40426101-27b6697dab34d385859ce1b5d";
const BASE_URL = "https://pixabay.com/api/";

async function getData(key, page){
    const options = new URLSearchParams({
        image_type: 'photo;',
        orientation: 'horizontal',
        per_page: 12,
      });
    const route = `${BASE_URL}?q=${key}&page=${page}&key=${API_KEY}&${options}`;
    console.log("Route", route)
    const { data } = await axios.get(route);
    return data.hits;
}   

 export default getData;