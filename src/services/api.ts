import { REGISTER_URL, LOGIN_URL } from "constants/api";
import {
  ApiOptions,
  ErrorResponse,
  RegisterUserData,
  RegisterUserResponse,
} from "./datamodels";

async function callApi<T>(
  url: string,
  method: string,
  body?: object,
  options?: ApiOptions
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  const requestOptions: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    throw new Error(`${error.message}`);
  }

  const responseData: T = await response.json();
  return responseData;
}

export async function registerUser(
  userData: RegisterUserData
): Promise<RegisterUserResponse> {
  const response = await callApi<RegisterUserResponse>(
    REGISTER_URL,
    "POST",
    userData
  );
  return response;
}

export async function loginUser(
  email: string,
  password: string
): Promise<any> {
  const body = { email, password };
  const response = await callApi<any>(LOGIN_URL, "POST", body);
  return response;
}

export async function fetchProtectedData(
  token: string
): Promise<any> {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await callApi<any>(
    "",
    "GET",
    undefined,
    { headers }
  );
  return response;
}
