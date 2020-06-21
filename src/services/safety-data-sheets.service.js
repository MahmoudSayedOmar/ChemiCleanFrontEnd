import { BASE_URL } from "../http-client/constants";

import axios from "axios";

export class SafetyDataSheetsService {
  async getSomeProducts(skip, take) {
    return await axios({
      method: "get",
      url: `${BASE_URL}product/GetSome/${skip}/${take}`,
      config: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "content-Type": "application/json",
        },
      },
    });
  }
}
