import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../../theme/theme";

interface NavBarProps {
  children?: ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return (
    <>
      <Box
        w="100%"
        bg={theme.colors.white}
        p={4}
        boxShadow="sm"
        position={"fixed"}
        top={0}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Flex align="center">
            <Box mr={4}>
              <Image src="/path-to-your-icon.svg" alt="Ícone" w="24px" />
            </Box>
            <Box>
              <Image src="/path-to-your-logo.svg" alt="Logo" h="40px" />
            </Box>
          </Flex>

          <Flex gap={6}>
            <Link
              href="#link1"
              color={theme.colors.text}
              _hover={{ textDecoration: "underline" }}
            >
              {theme.link.clients}
            </Link>
            <Link
              href="#link2"
              color={theme.colors.text}
              _hover={{ textDecoration: "underline" }}
            >
              {theme.link.selectedCustomers}
            </Link>
            <Link
              href="#link3"
              color={theme.colors.text}
              _hover={{ textDecoration: "underline" }}
            >
              {theme.link.exit}
            </Link>
          </Flex>

          <Text color={theme.colors.text}>Olá, Usuário</Text>
        </Flex>
      </Box>
      <Box
        h={"100%"}
        w={"100%"}
        position={"fixed"}
        top={"104px"}
        padding={"24px 40px 50px 40px"}
        bg={theme.colors.backGround}
      >
        {children}
      </Box>
    </>
  );
};
