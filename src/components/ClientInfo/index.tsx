import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { BiPencil } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { ClientDto } from "../../dtos/ClientPaginatorDTO";

interface ClientInfoProps {
  client: ClientDto;
}

const formatCurrency = (value: string | number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));
};

export const ClientInfo = ({ client }: ClientInfoProps) => {
  return (
    <Box
      p={4}
      w="285px"
      h="138px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={theme.colors.white}
      border={`2px ${theme.colors.border}`}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(169, 169, 169, 0.3)"
      borderRadius={"6px"}
    >
      <Box
        height={"100%"}
        width={"80%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        flexWrap={"nowrap"}
        alignItems={"center"}
      >
        <Text
          fontFamily="Inter"
          fontWeight={700}
          fontSize="16px"
          lineHeight="19.36px"
          letterSpacing="0%"
        >
          {client.name}
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="14px"
          lineHeight="16.94px"
          letterSpacing="0%"
        >
          {theme.labels.wage} {formatCurrency(client.wage)}
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="14px"
          lineHeight="16.94px"
          letterSpacing="0%"
        >
          {theme.labels.enterprise} {formatCurrency(client.company_value)}
        </Text>
      </Box>

      <Box
        mt={"10px"}
        w={"100%"}
        display={"flex"}
        flexWrap={"nowrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>
          <FaPlus size={"17px"} />
        </Text>
        <Text>
          <BiPencil size={"20px"} />
        </Text>
        <Text>
          <GoTrash size={"20px"} color={theme.colors.red} />
        </Text>
      </Box>
    </Box>
  );
};
