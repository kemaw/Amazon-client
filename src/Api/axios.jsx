import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:9999",

  baseURL: " https://api-rstfutk3za-uc.a.run.app"  
  // --from firebase function deployment if we use firebase api baseURL change to this
});

export { axiosInstance };
