import { useEffect, useState } from "react";
import { ClientDto } from "../../../dtos/ClientPaginatorDTO";
import {
  getClientsSelectd,
  updateSelectedClients,
} from "../../../api/clientApi";

export const useClientSelected = () => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<ClientDto[]>();

  const handleGetClientsSelectd = async () => {
    try {
      setLoading(true);
      const result = await getClientsSelectd();
      setClients(result);
    } catch (error) {
      alert("Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSelectedClients = async () => {
    try {
      setLoading(true);
      const uuids = clients?.map((client) => client.id);
      await updateSelectedClients(uuids || []);
      await handleGetClientsSelectd();
    } catch (error) {
      alert("Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetClientsSelectd();
  }, []);

  return {
    loading,
    clients,
    setLoading,
    handleUpdateSelectedClients,
  };
};
