export interface ClientDto {
  id: string;
  name: string;
  wage: string | number;
  company_value: string | number;
  selected: boolean;
}

export interface ClientPaginatorDTO {
  data: ClientDto[];
  total: number;
  page: number;
  limit: number;
}
