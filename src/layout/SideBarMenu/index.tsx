import { Box, Link, Icon } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { TiUser } from "react-icons/ti";
import { BsGridFill } from "react-icons/bs";
import { RiHome5Fill } from "react-icons/ri";

import theme from "../../theme/theme";

export const SidebarMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Home",
      path: "#",
      icon: RiHome5Fill,
    },
    { label: "Clientes", path: "/client", icon: TiUser },
    { label: "Produtos", path: "#", icon: BsGridFill },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={4} mt={6}>
      {menuItems.map((item) => (
        <Box
          key={item.path}
          display="flex"
          alignItems="center"
          gap={3}
          cursor="pointer"
          position="relative"
          onClick={() => item.path !== "#logout" && navigate(item.path)}
          _hover={{ color: theme.colors.primary }}
          ml={"16px"}
          height={"36px"}
        >
          <Icon
            as={item.icon}
            boxSize={"20px"}
            color={
              location.pathname === item.path
                ? theme.colors.primary
                : theme.colors.text
            }
          />

          <Link
            fontWeight={location.pathname === item.path ? "bold" : "normal"}
            color={
              location.pathname === item.path
                ? theme.colors.primary
                : theme.colors.text
            }
            _hover={{ textDecoration: "none" }}
          >
            {item.label}
          </Link>
          {location.pathname === item.path && (
            <Box
              position="absolute"
              right={0}
              height="100%"
              width="4px"
              bg={theme.colors.primary}
              borderRadius="1px"
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
