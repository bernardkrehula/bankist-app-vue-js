import axios from "axios"

export const requestBalance = async() => {
    const response = await axios.get("https://6a8757d470fbbd308f98f1ed.mockapi.io/Users");
    console.log(response.data)
    return response.data;
}