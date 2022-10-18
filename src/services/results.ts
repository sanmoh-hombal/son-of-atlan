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

/**
 * Helps download a csv file from given data
 *
 * @param {Record<string, any>[]} data - this is the data that you want to download.
 * @param {string} tableName - The name of the table you're querying
 */
export function download(data: Record<string, any>[], tableName: string): void {
  const hiddenElement: HTMLAnchorElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(CsvHelper.deparse(data));
  hiddenElement.target = "_blank";
  hiddenElement.download = `${tableName}_query_result_${new Date().toISOString()}.csv`;
  hiddenElement.click();
}
