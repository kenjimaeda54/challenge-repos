import axios from "axios";

//https://api.github.com/repos/facebook/react

export default axios.create({
  baseURL: "https://api.github.com",
});
