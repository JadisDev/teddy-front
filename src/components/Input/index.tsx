import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import theme from "../../theme/theme";

interface CustomInputProps extends InputProps {
  placeholder: string;
  width?: string;
}

export const Input: React.FC<CustomInputProps> = ({
  placeholder,
  width = "100%",
  ...props
}) => {
  return (
    <ChakraInput
      placeholder={placeholder}
      size="lg"
      w={width}
      borderColor={theme.colors.border}
      _placeholder={{ textAlign: "left" }}
      style={{ textAlign: "left" }}
      {...props}
    />
  );
};
