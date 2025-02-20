import { Box, Text } from "@chakra-ui/react";
import theme from "../../theme/theme";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
  const { handleLogin, name, setName } = useLogin();

  return (
    <Box
      p={4}
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      bg="white"
    >
      <Text
        fontFamily="Inter"
        fontWeight={400}
        fontSize="36px"
        lineHeight="43.57px"
        letterSpacing="0%"
        color={theme.colors.text}
      >
        {theme.labels.welcome}
      </Text>

      <Input
        placeholder={theme.inputs.name}
        size="lg"
        width="50%"
        bg={theme.colors.white}
        color={theme.colors.text}
        textAlign="center"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button
        label={theme.labels.enter}
        size="2xl"
        onClick={handleLogin}
        backgroundColor={theme.colors.primary}
        w="50%"
      />
    </Box>
  );
};
