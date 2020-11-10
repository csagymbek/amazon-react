import axios from "axios";
export const instance = axios.create({
  baseURL: "https://us-central1-react-f55d1.cloudfunctions.net/api",
  // "http://localhost:5001/react-f55d1/us-central1/api",
}); //The API URL (cloud function);
