import axios, { AxiosInstance, AxiosResponse } from "axios";
import { CheckDatesResponse } from "../types";

const BASE_URL = "https://qyy12gjo93.execute-api.us-west-2.amazonaws.com/";

export class ApiBaseClass {
  instance: AxiosInstance;

  constructor(headers?: any) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers,
    });
  }

  getClient(url: string) {
    return this.instance.get(url);
  }
}

export const Api = {
  getDates: (
    country: string,
    targetConsulate: string
  ): Promise<AxiosResponse<CheckDatesResponse>> => {
    return new ApiBaseClass().getClient(
      `/v1/checkDates?country=${country}&targetConsulate=${targetConsulate}`
    );
  },
};
