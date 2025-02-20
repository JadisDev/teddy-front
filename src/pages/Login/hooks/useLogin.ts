import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { generateJwt } from "../../../api/userApi";

export const useLogin = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (name.trim() !== "") {
        const response = await generateJwt(name);
        localStorage.setItem("token", response);
        navigate("/client");
      } else {
        alert("Informe um nome");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);

      alert("Erro inesperado");
    }
  };

  return {
    name,
    setName,
    handleLogin,
  };
};
