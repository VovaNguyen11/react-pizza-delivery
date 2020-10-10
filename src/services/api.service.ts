import {AxiosResponse, AxiosError} from "axios";

export async function handleResponse(
  response: AxiosResponse<any>
): Promise<any> {
  if (response.status === 200) return response;
  if (response.status === 400) {
    const error = response.statusText;
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error: AxiosError) {
  console.error("API call failed. " + error);
  throw error;
}
