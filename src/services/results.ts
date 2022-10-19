import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";

import { CsvHelper } from "@lib";

const http: AxiosInstance = axios.create({ timeout: 10000 });

interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
  metadata: {
    startTime: Date;
    endTime?: Date;
    duration?: number;
  };
}

http.interceptors.request.use((request: AxiosRequestConfig): IExtendedAxiosRequestConfig => {
  const config: IExtendedAxiosRequestConfig = { ...request, metadata: { startTime: new Date() } };
  return config;
});

http.interceptors.response.use((response: AxiosResponse) => {
  const config: IExtendedAxiosRequestConfig = { ...(response.config as IExtendedAxiosRequestConfig) };
  config.metadata.endTime = new Date();
  config.metadata.duration = (config.metadata.endTime.getTime() - config.metadata.startTime.getTime()) / 1000;
  response.config = config;
  return response;
});

/**
 * It makes a GET request to the given URL, parses the CSV response, and returns the parsed data
 *
 * @param {string} url - The URL of the CSV file.
 * @return {Promise<Array<string[]>>} A Promise that resolves to an array of objects.
 */
export async function get(url: string): Promise<Record<string, any>> {
  const response: AxiosResponse = await http.get(url);
  const duration: number = (response.config as IExtendedAxiosRequestConfig).metadata.duration!;
  return { data: CsvHelper.parse(response.data), duration };
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
