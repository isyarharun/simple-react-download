import axios from "axios";
import config from "../utils/config";
const exportedObject = {
  async generateString() {
    let response = await axios.post(`${config.API_HOST}/api/generate`);
    return response.data;
  },
  async generateReport(fileName) {
    let response = await axios.get(`${config.API_HOST}/api/report/${fileName}`);
    return response.data;
  },
};
export default exportedObject;
