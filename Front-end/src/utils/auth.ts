import apiClient from "./axios";

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const isLoggedIn = () => {};

export const getUser = async (): Promise<User> => {
  const response = await apiClient.get("http://localhost:8000/api/users/current", {
    withCredentials: true,
  });
  return response.data.data;
};
