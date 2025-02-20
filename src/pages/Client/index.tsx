import { ChangeEvent, JSX, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

import Pagination from "../../components/Pagination";
import { NavBar } from "../../layout/NavBar";
import theme from "../../theme/theme";
import Button from "../../components/Button";
import { ClientInfo } from "../../components/ClientInfo";
import { useClient } from "./hooks/useClient";
import { ClientDto } from "../../dtos/ClientPaginatorDTO";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { MaskedInput } from "../../components/MaskedInput";
import { createClient, deleteClient, updateClient } from "../../api/clientApi";
import { toast } from "react-toastify";

export const Client = () => {
  const {
    clients,
    page,
    setPage,
    limit,
    clientsFound,
    setLimit,
    loading,
    setLoading,
    handleGetClients,
  } = useClient();

  const { open, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [textButton, setTextButon] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  const [client, setClient] = useState<Partial<ClientDto>>({
    id: "",
    name: "",
    wage: "",
    company_value: "",
    selected: false,
  });

  useEffect(() => {
    if (open && client.id === "") {
      setClient({
        id: "",
        name: "",
        wage: "",
        company_value: "",
        selected: false,
      });
    }
  }, [open]);

  const handleOnAdd = () => {
    setIsDelete(false);
    setClient({
      name: "",
      wage: "",
      company_value: "",
      selected: false,
    });
    setTitle(`${theme.labels.newCustomers}:`);
    setTextButon(theme.labels.newCustomers);
    onOpen();
  };

  const handleOnEdit = (clientDto: ClientDto) => {
    setIsDelete(false);
    setClient(clientDto);
    setTitle(`${theme.labels.updateCustomers}:`);
    setTextButon(theme.labels.updateCustomers);
    onOpen();
  };

  const handleOnDelete = (clientDto: ClientDto) => {
    setIsDelete(true);
    setClient(clientDto);
    setTitle(`${theme.labels.deleteClient}:`);
    setTextButon(theme.labels.deleteClient);
    onOpen();
  };

  const handleUpdateStatus = async (clientDto: ClientDto) => {
    try {
      setLoading(true);
      await updateClient(clientDto.id, { ...clientDto, selected: true });
      await handleGetClients();
    } catch (error) {
      toast.error("Erro inesperado", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNewOrUpdate = async () => {
    try {
      setLoading(true);
      if (client.id) {
        await updateClient(client.id, client);
      } else {
        await createClient(client);
      }
      await handleGetClients();
      onClose();
    } catch (error) {
      toast.error("Erro inesperado", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteClient(client.id ?? "");
      await handleGetClients();
      onClose();
    } catch (error) {
      toast.error("Erro inesperado", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ClientDto
  ) => {
    const { value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [field]: value,
    }));
  };

  const makeForm = (): JSX.Element => {
    if (isDelete) {
      return (
        <Box>
          <Flex alignItems="center">
            <Text fontFamily="Inter" fontSize="16px" fontWeight="400">
              {theme.labels.messegaDeleteClient}
            </Text>
            <Text fontFamily="Inter" fontSize="16px" fontWeight="bold" ml={2}>
              {client.name}
            </Text>
          </Flex>
          <Button
            height="44px"
            label={textButton}
            size="sm"
            onClick={handleDelete}
            backgroundColor={theme.colors.primary}
            w="100%"
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="bold"
            mt={2}
          />
        </Box>
      );
    }

    return (
      <Box>
        <Input
          placeholder={theme.inputs.name}
          size="lg"
          width="100%"
          bg={theme.colors.white}
          color={theme.colors.text}
          textAlign="center"
          mb={2}
          value={client.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "name")
          }
        />

        <MaskedInput
          placeholder={theme.inputs.wage}
          size="lg"
          width="100%"
          bg={theme.colors.white}
          color={theme.colors.text}
          textAlign="center"
          mb={2}
          value={client.wage ?? ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "wage")
          }
        />

        <MaskedInput
          placeholder={theme.inputs.enterpriseValue}
          size="lg"
          width="100%"
          bg={theme.colors.white}
          color={theme.colors.text}
          textAlign="center"
          mb={3}
          value={client.company_value ?? ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "company_value")
          }
        />

        <Button
          height={"44px"}
          label={textButton}
          size="sm"
          onClick={handleNewOrUpdate}
          backgroundColor={theme.colors.primary}
          w="100%"
          fontFamily={"Inter"}
          fontSize={"14px"}
          fontWeight={"bold"}
        />
      </Box>
    );
  };

  useEffect(() => {
    const selectElement = document.querySelector("select");
    const nextDiv = selectElement?.nextElementSibling as HTMLElement;
    if (nextDiv) {
      nextDiv.style.display = "none";
    }
  }, []);

  return (
    <NavBar>
      <Modal isOpen={open} onClose={onClose} title={title}>
        {makeForm()}
      </Modal>

      <Box h="90%" display="grid" gridTemplateRows="auto 1fr auto" gap={4}>
        <Box>
          <Flex justify="space-between" align="center" w="100%">
            <Text
              fontFamily="Inter"
              fontSize="18px"
              lineHeight="21.78px"
              letterSpacing="0%"
            >
              <Text as="span" fontWeight="bold">
                {clientsFound}
              </Text>{" "}
              {theme.labels.customersFound}
            </Text>

            <Flex align="center" gap={2}>
              <Text>{theme.labels.customersPerPage}</Text>
              <Select
                size="sm"
                w="70px"
                variant="outline"
                position={"inherit"}
                defaultValue={10}
                onChange={(e) => setLimit(Number(e.target.value))}
                icon={undefined}
              >
                <option value="16">16</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </Select>
            </Flex>
          </Flex>
        </Box>

        <Box
          overflowY="auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={2}
          maxHeight="calc(90vh - 40px)"
          p={0}
          alignContent={"start"}
        >
          {loading
            ? Array.from({ length: limit }).map((_, index) => (
                <Skeleton
                  key={index}
                  height="138px"
                  width="285px"
                  borderRadius="6px"
                />
              ))
            : clients?.data.map((client, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                  border={`2px ${theme.colors.border}`}
                >
                  <ClientInfo
                    key={index}
                    client={client}
                    handleUpdateStatus={handleUpdateStatus}
                    onDelete={handleOnDelete}
                    onEdit={handleOnEdit}
                  />
                </Box>
              ))}
        </Box>

        <Box>
          <Grid w="100%">
            <Button
              label={theme.labels.newCustomers}
              backgroundColor={theme.colors.transparent}
              onClick={() => handleOnAdd()}
              borderColor={theme.colors.primary}
              color={theme.colors.primary}
              fontSize={"14px"}
            />

            <Flex justifyContent={"center"} mt={4}>
              <Pagination
                total={clients?.total ?? 0}
                page={page}
                limit={limit}
                onPageChange={setPage}
              />
            </Flex>
          </Grid>
        </Box>
      </Box>
    </NavBar>
  );
};
