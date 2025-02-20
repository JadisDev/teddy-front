export interface ClientDto {
  id: string;
  name: string;
  wage: string;
  company_value: string;
  selected: boolean;
}

export interface ClientPaginatorDTO {
  data: ClientDto[];
  total: number;
  page: number;
  limit: number;
}
