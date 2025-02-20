import { Box, Flex, Grid, Text, Skeleton } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";

import Pagination from "../../components/Pagination";
import { NavBar } from "../../layout/NavBar";
import theme from "../../theme/theme";
import Button from "../../components/Button";
import { ClientInfo } from "../../components/ClientInfo";
import { useClient } from "./hooks/useClient";

export const Client = () => {
  const { clients, page, setPage, limit, clientsFound, setLimit, loading } =
    useClient();

  return (
    <NavBar>
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
                  <ClientInfo client={client} />
                </Box>
              ))}
        </Box>

        <Box>
          <Grid w="100%">
            <Button
              label={theme.labels.newCustomers}
              backgroundColor={theme.colors.transparent}
              onClick={() => alert("cadastrar novo cliente")}
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
