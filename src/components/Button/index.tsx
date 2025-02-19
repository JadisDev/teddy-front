import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
  backgroundColor: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
}

const Button = ({
  label,
  backgroundColor,
  fontFamily = "Inter",
  fontSize = "24px",
  fontWeight = "700",
  ...props
}: CustomButtonProps) => {
  return (
    <ChakraButton
      {...props}
      bg={backgroundColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight="29.05px"
      letterSpacing="0%"
    >
      {label}
    </ChakraButton>
  );
};

export default Button;
