import { ReactNode } from "react";
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { Flex, Text } from "@chakra-ui/react";

import theme from "../../theme/theme";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.8)" />
      <ModalContent
        maxW="350px"
        minW="auto"
        borderRadius="4px"
        left={"37%"}
        top={"35%"}
        position={"fixed"}
      >
        <Flex
          justify="space-between"
          align="center"
          w="100%"
          p={"14px 14px 0px 14px"}
          bg={theme.colors.white}
        >
          <ModalHeader flex={1}>
            <Text
              fontFamily={"Inter"}
              fontWeight={"bold"}
              fontSize={"16px"}
              lineHeight="1.2"
            >
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton
            size="sm"
            position="static"
            p={"0px"}
            _hover={{
              backgroundColor: theme.colors.transparent,
              outline: "none",
              boxShadow: "none",
              borderColor: theme.colors.transparent,
            }}
            _focus={{ boxShadow: "none", outline: "none" }}
          />
        </Flex>

        <ModalBody bg={theme.colors.white} p={"14px"}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
