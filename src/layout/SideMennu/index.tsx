import { Box, Icon, Image } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";

import theme from "../../theme/theme";
import logo from "../../assets/Logo.svg";
import { SidebarMenu } from "../SideBarMenu";

interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <Box
      position="fixed"
      left={isOpen ? "0" : "-250px"}
      top="0"
      width="250px"
      height="100vh"
      bg={theme.colors.white}
      boxShadow="md"
      transition="left 0.3s ease-in-out"
      zIndex={999999}
    >
      <Box
        textAlign="right"
        onClick={toggleMenu}
        height="82px"
        bg="#5a5a64"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={logo} alt="Logo" />
      </Box>

      {isOpen && (
        <Box
          cursor="pointer"
          fontSize="20px"
          onClick={toggleMenu}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="40px"
          height="40px"
          borderRadius="full"
          bg="gray.300"
          _hover={{ bg: "gray.400" }}
          position={"fixed"}
          mt={"-21px"}
          left={"227px"}
        >
          <Icon
            as={FaArrowLeft}
            boxSize={"16px"}
            backgroundColor={theme.colors.white}
            color={theme.colors.text}
            borderRadius={"16px"}
          />
        </Box>
      )}

      <Box display="flex" flexDirection="column" gap={4} mt={6}>
        <SidebarMenu />
      </Box>
    </Box>
  );
};
