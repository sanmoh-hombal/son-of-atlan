import axios, { type AxiosInstance, type AxiosResponse } from "axios";

import { CsvHelper } from "@lib";

const http: AxiosInstance = axios.create({ timeout: 10000 });

/**
 * It makes a GET request to the given URL, parses the CSV response, and returns the parsed data
 *
 * @param {string} url - The URL of the CSV file.
 * @return {Promise<Array<string[]>>} A Promise that resolves to an array of objects.
 */
export async function get(url: string): Promise<Record<string, any>[]> {
  const response: AxiosResponse = await http.get(url);
  return CsvHelper.parse(response.data);
}
