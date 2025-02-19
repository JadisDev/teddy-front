import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import theme from "../../theme/theme";

interface CustomInputProps extends InputProps {
  placeholder: string;
  width?: string;
}

const Input = ({ placeholder, width = "100%", ...props }: CustomInputProps) => {
  return (
    <ChakraInput 
      placeholder={placeholder} 
      size="lg" 
      w={width}
      textAlign="left"
      borderColor={theme.colors.border} 
      _placeholder={{ textAlign: "left" }} 
      {...props}
    />
  );
};

export default Input;
