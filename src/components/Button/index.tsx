import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import theme from "../../theme/theme"; // Importando o tema

interface CustomButtonProps extends ButtonProps {
  label: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
}

const Button = ({
  label,
  fontFamily = "Inter",
  fontSize = "24px",
  fontWeight = "700",
  ...props
}: CustomButtonProps) => {
  return (
    <ChakraButton
      {...props}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight="29.05px"
      letterSpacing="0%"
      border="1px solid"
      _hover={{
        borderColor: theme.colors.primary,
      }}
      _focus={{
        borderColor: theme.colors.primary,
      }}
      _active={{
        borderColor: theme.colors.primary,
      }}
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
