import { useEffect, useState } from "react";
import { getClientPaginator } from "../../../api/clientApi";
import { ClientPaginatorDTO } from "../../../dtos/ClientPaginatorDTO";

export const useClient = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState<ClientPaginatorDTO | null>();
  const [limit, setLimit] = useState(16);
  const [clientsFound, setClientsFound] = useState(0);

  const handleGetClients = async () => {
    try {
      setLoading(true);
      const result = await getClientPaginator(limit, page);
      setClients(result);
      setClientsFound(result.data.length);
    } catch (error) {
      alert("Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetClients();
  }, []);

  useEffect(() => {
    if (limit && page) {
      handleGetClients();
    }
  }, [limit, page]);

  return {
    page,
    setPage,
    loading,
    clients,
    setLimit,
    limit,
    clientsFound,
  };
};
