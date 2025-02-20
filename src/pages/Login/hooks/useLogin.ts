import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { generateJwt } from "../../../api/userApi";
import { toast } from "react-toastify";

export const useLogin = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (name.trim() !== "") {
        const response = await generateJwt(name);
        localStorage.setItem("token", response);
        localStorage.setItem("user", name);
        navigate("/client");
      } else {
        toast.error("Informe um nome", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Erro ao logar:", error);

      toast.error("Erro ao logar", {
        autoClose: 3000,
      });
    }
  };

  return {
    name,
    setName,
    handleLogin,
  };
};
