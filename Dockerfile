# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM node:20-alpine AS runtime

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install

COPY --from=builder /app/dist /app/dist

EXPOSE 5173

CMD ["npm", "run", "dev"]
