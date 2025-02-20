import { Box, Grid, Skeleton, Text } from "@chakra-ui/react";
import { NavBar } from "../../layout/NavBar";
import theme from "../../theme/theme";
import { useClientSelected } from "./hooks/useClientSelected";
import { ClientInfo } from "../../components/ClientInfo";
import Button from "../../components/Button";

export const ClientSelected = () => {
  const { clients, loading, handleUpdateSelectedClients } = useClientSelected();

  return (
    <NavBar>
      <Box h="5%" display="grid" gap={4}>
        <Text fontFamily={"Inter"} fontWeight={"700"} fontSize={"22px"}>
          {theme.labels.clientSelecteds}
        </Text>
      </Box>

      <Box
        h={"70%"}
        overflowY="auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap={2}
        maxHeight="calc(90vh - 40px)"
        p={0}
        alignContent={"start"}
      >
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skeleton
                key={index}
                height="138px"
                width="285px"
                borderRadius="6px"
              />
            ))
          : clients?.map((client, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={2}
                border={`2px ${theme.colors.border}`}
              >
                <ClientInfo client={client} noButtons />
              </Box>
            ))}
      </Box>

      <Box mt={4}>
        <Grid w="100%">
          <Button
            label={theme.labels.clearClients}
            backgroundColor={theme.colors.transparent}
            onClick={handleUpdateSelectedClients}
            borderColor={theme.colors.primary}
            color={theme.colors.primary}
            fontSize={"14px"}
          />
        </Grid>
      </Box>
    </NavBar>
  );
};
