import { useEffect, useState } from "react";
import { getClientPaginator } from "../../../api/clientApi";
import { ClientPaginatorDTO } from "../../../dtos/ClientPaginatorDTO";
import { toast } from "react-toastify";

export const useClient = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<ClientPaginatorDTO | null>(null);
  const [limit, setLimit] = useState(16);
  const [clientsFound, setClientsFound] = useState(0);

  const handleGetClients = async () => {
    try {
      setLoading(true);
      const result = await getClientPaginator(limit, page);
      setClients(result);
      setClientsFound(result.data.length);
    } catch (error) {
      toast.error("Erro inesperado", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGetClientsManual = async (limit: number, page: number) => {
    try {
      setLoading(true);
      const result = await getClientPaginator(limit, page);
      setClients(result);
      setClientsFound(result.data.length);
    } catch (error) {
      toast.error("Erro inesperado", {
        autoClose: 3000,
      });
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

  useEffect(() => {
    console.warn({ clientsFound, page });
    if (clientsFound === 0 && page > 0) {
      handleGetClientsManual(16, 1);
      setPage(1);
      setLimit(16);
    }
  }, [clientsFound, page]);

  useEffect(() => {
    if (limit === 16 && page === 1) {
      handleGetClients();
    }
  }, [limit, page]);

  const showLoader = loading || (clientsFound === 0 && page === 1);

  return {
    page,
    setPage,
    loading: showLoader,
    clients,
    setLimit,
    limit,
    clientsFound,
    setLoading,
    handleGetClients,
  };
};
