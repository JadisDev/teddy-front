import axiosInstance from "./axios";
import { ClientDto, ClientPaginatorDTO } from "../dtos/ClientPaginatorDTO";
import { parseCurrencyValue } from "../utils";

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

export const updateClient = async (
  clientId: string,
  clientDto: Partial<ClientDto>
): Promise<Partial<ClientDto>> => {
  try {
    const transformedClientDto = {
      ...clientDto,
      wage: parseCurrencyValue(clientDto.wage as number),
      company_value: parseCurrencyValue(clientDto.company_value as number),
    };

    const response = await axiosInstance.patch<Partial<ClientDto>>(
      `/client/${clientId}`,
      transformedClientDto
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar o cliente", error);
    throw error;
  }
};

export const createClient = async (
  clientDto: Partial<ClientDto>
): Promise<Partial<ClientDto>> => {
  try {
    const transformedClientDto = {
      ...clientDto,
      wage: parseCurrencyValue(clientDto.wage as number),
      company_value: parseCurrencyValue(clientDto.company_value as number),
    };

    const response = await axiosInstance.post<Partial<ClientDto>>(
      "/client",
      transformedClientDto
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    throw error;
  }
};

export const deleteClient = async (clientId: string): Promise<void> => {
  try {
    await axiosInstance.delete<void>(`/client/${clientId}`);
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    throw error;
  }
};

export const getClientsSelectd = async (): Promise<ClientDto[]> => {
  try {
    const response = await axiosInstance.get<Promise<ClientDto[]>>(
      `/client/selected`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao criar o cliente", error);
    throw error;
  }
};

export const updateSelectedClients = async (uuids: string[]): Promise<void> => {
  try {
    await axiosInstance.patch("/client/update-selected-false", { uuids });
  } catch (error) {
    console.error("Erro ao atualizar clientes selecionados", error);
    throw error;
  }
};
