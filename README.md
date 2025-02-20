# Teddy Front

Este é um projeto frontend desenvolvido com **React**, **Vite**, **TypeScript** e **Chakra UI**. **Axios** para requisições API, e outras bibliotecas para estilização e animações.
Clone o projeto aqui: https://github.com/JadisDev/teddy-front.git

Link para o back:
https://github.com/JadisDev/teddy-back.git

## Tecnologias utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **Chakra UI**: Biblioteca de componentes de interface.
- **Redux Toolkit**: Biblioteca para gerenciamento de estado global.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Framer Motion**: Biblioteca de animações.
- **React Router DOM**: Para navegação no frontend.

## Estrutura de pastas

- `src/`: Contém todos os arquivos de código-fonte.
  - `components/`: Componentes reutilizáveis da aplicação.
  - `hooks/`: Hooks personalizados.
  - `pages/`: Páginas da aplicação.
  - `services/`: Requisições API com Axios.
  - `store/`: Configuração do Redux.

## Scripts

- `dev`: Inicia o servidor de desenvolvimento.
  ```bash
  npm run dev
  ```

## Deploy

- Para subir a aplicação.
  ```bash
  docker-compose build
  docker-compose up
  ```
