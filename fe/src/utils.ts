import axios from "axios";
import { BE_URL } from "./config";

export const fetchISSLocation = async () => {
  const response = await axios.get(BE_URL);
  return response.data;
};
