import axiosInstance from "./axios";
import { ClientPaginatorDTO } from "../dtos/ClientPaginatorDTO";

export const getClientPaginator = async (
  limit: number,
  page: number
): Promise<ClientPaginatorDTO> => {
  try {
    const response = await axiosInstance.get<ClientPaginatorDTO>(
      `/client/pagination?limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clientes paginados", error);
    throw error;
  }
};
