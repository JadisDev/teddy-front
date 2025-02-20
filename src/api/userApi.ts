import { JwtResponseDTO } from "../dtos/JwtResponseDTO";
import axiosInstance from "./axios";

export const generateJwt = async (name: string): Promise<string> => {
  const response = await axiosInstance.post<JwtResponseDTO>("/auth/login", {
    name,
  });
  return response.data.access_token;
};
