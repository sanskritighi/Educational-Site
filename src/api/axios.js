import axios from "axios";
import { BACKEND_DOMAIN } from "./globals";

const BASE_URL=BACKEND_DOMAIN

export default axios.create({
  // baseURL: "https://napa.pythonanywhere.com/",
  baseURL: BASE_URL
});
