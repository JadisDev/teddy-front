import { useState } from "react";
import Pagination from "../../components/Pagination";
import { NavBar } from "../../layout/NavBar";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Button from "../../components/Button";
import { ClientInfo } from "../../components/ClientInfo";

export const Client = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 50;
  const itemsPerPage = 5;

  const generateMockClients = () => {
    const clients = [];
    for (let i = 1; i <= 20; i++) {
      clients.push({
        name: `Cliente ${i}`,
        wage: `R$ ${3500 + i * 100}`,
        enterprise: `R$ ${120000 + i * 1000}`,
      });
    }
    return clients;
  };

  const clients = generateMockClients();

  return (
    <NavBar>
      <Box h="90%" display="grid" gridTemplateRows="auto 1fr auto" gap={4}>
        <Box>
          <Flex justify="space-between" align="center" w="100%">
            <Text>{theme.labels.customersFound}</Text>
            <Text>{theme.labels.customersPerPage}</Text>
          </Flex>
        </Box>

        <Box
          overflowY="auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={2}
          maxHeight="calc(90vh - 40px)"
          p={0}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
              border={`2px ${theme.colors.border}`}
            >
              <ClientInfo />
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
                total={totalItems}
                page={currentPage}
                limit={itemsPerPage}
                onPageChange={setCurrentPage}
              />
            </Flex>
          </Grid>
        </Box>
      </Box>
    </NavBar>
  );
};
