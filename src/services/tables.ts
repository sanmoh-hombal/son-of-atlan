import axios, { type AxiosInstance, type AxiosResponse } from "axios";

import { CONSTANTS } from "@lib";

const http: AxiosInstance = axios.create({ baseURL: CONSTANTS.TYPICODE_API_URL, timeout: 10000 });

export interface ITable {
  id: string;
  name: string;
  query: string;
  data_url: string;
}

/**
 * It makes an HTTP GET request to the '/tabless' endpoint, and returns the response data
 * @return {Promise<ITable[]>} A Promise that resolves to an array of ITable objects
 */
export async function get(): Promise<ITable[]> {
  const response: AxiosResponse = await http.get("/tabless");
  return response.data as ITable[];
}
