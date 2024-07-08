# Use a imagem oficial do Node.js como base
FROM node:18-alpine AS build

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Construa o aplicativo Angular
RUN npm run build --prod

# Use uma imagem nginx para servir o aplicativo
FROM nginx:alpine

# Copie os arquivos construídos para o diretório nginx
COPY --from=build /app/dist/books-app /usr/share/nginx/html

# Exponha a porta 80 para acessar o aplicativo
EXPOSE 80

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
