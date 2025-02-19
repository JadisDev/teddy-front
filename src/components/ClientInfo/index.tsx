import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";
import { BiPencil } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";

function ClientInfo() {
  const a = 1;

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
          Eduardo
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="14px"
          lineHeight="16.94px"
          letterSpacing="0%"
        >
          {theme.labels.wage} R$3.500,00
        </Text>
        <Text
          fontFamily="Inter"
          fontWeight={400}
          fontSize="14px"
          lineHeight="16.94px"
          letterSpacing="0%"
        >
          {theme.labels.enterprise} R$120.000,00
        </Text>
      </Box>

      <Box
        w={"100%"}
        display={"flex"}
        flexWrap={"nowrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text>
          <FaPlus width={"17px"} height={"17px"} />
        </Text>
        <Text>
          <BiPencil width={"20px"} height={"20px"} />
        </Text>
        <Text>
          <GoTrash width={"20px"} height={"20px"} color={theme.colors.red} />
        </Text>
      </Box>
    </Box>
  );
}

export default ClientInfo;
