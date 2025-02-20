import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tratar erros globais, como falha na autenticação
    if (error.response && error.response.status === 401) {
      // Redirecionar para login ou mostrar mensagem de erro
      console.error("Usuário não autorizado");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
