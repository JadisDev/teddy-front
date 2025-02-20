import { useState } from "react";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

import theme from "../../theme/theme";
import logo from "../../assets/Logo.svg";
import { SideMenu } from "../SideMenu";

export const NavBar: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const name = localStorage.getItem("user");

  return (
    <>
      <Box
        w="100%"
        bg={theme.colors.white}
        p={4}
        boxShadow="sm"
        position="fixed"
        top={0}
        zIndex={10}
      >
        <Flex justify="space-between" align="center" w="100%">
          <Flex align="center">
            <Box mr={4} cursor="pointer" onClick={toggleMenu}>
              <FcMenu size={"24px"} />
            </Box>
            <Box>
              <Image src={logo} alt="Logo" />
            </Box>
          </Flex>

          <Flex gap={6} display={{ base: "none", md: "flex" }}>
            <Link
              onClick={() => navigate("/client")}
              color={
                location.pathname === "/client"
                  ? theme.colors.primary
                  : theme.colors.text
              }
              _hover={{ textDecoration: "underline" }}
              fontWeight={location.pathname === "/client" ? "bold" : "normal"}
              textDecoration={
                location.pathname === "/client" ? "underline" : "none"
              }
            >
              {theme.link.clients}
            </Link>

            <Link
              onClick={() => navigate("/client-selected")}
              color={
                location.pathname === "/client-selected"
                  ? theme.colors.primary
                  : theme.colors.text
              }
              _hover={{ textDecoration: "underline" }}
              fontWeight={
                location.pathname === "/client-selected" ? "bold" : "normal"
              }
              textDecoration={
                location.pathname === "/client-selected" ? "underline" : "none"
              }
            >
              {theme.link.selectedCustomers}
            </Link>

            <Link
              onClick={() => {
                localStorage.setItem("token", "");
                localStorage.setItem("user", "");
                navigate("/");
              }}
              color={theme.colors.text}
              _hover={{ textDecoration: "underline" }}
            >
              {theme.link.exit}
            </Link>
          </Flex>

          <Text color={theme.colors.text}>
            Olá,{" "}
            <Text as="span" fontWeight="bold">
              {name}
            </Text>
          </Text>
        </Flex>
      </Box>

      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <Box
        h="100%"
        w="100%"
        position="fixed"
        top="81px"
        padding="24px 40px 50px 40px"
        bg={theme.colors.backGround}
      >
        {children}
      </Box>
    </>
  );
};
