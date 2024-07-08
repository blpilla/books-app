# Backend - Books App

Este é o backend do aplicativo Books App, desenvolvido com Laravel 11. Ele fornece uma API para gerenciar livros e exibir a previsão do tempo.

## Pré-requisitos

- PHP 8.3
- Composer
- MySQL

## Configuração do Projeto

1. Instale as dependências do PHP:
    composer install

2. Copie o arquivo `.env.example` para `.env` e configure suas variáveis de ambiente:

3. Gere a chave da aplicação:
    php artisan key:generate

4. Execute as migrações do banco de dados:
    php artisan migrate

## Como rodar a aplicação

### Docker

1. Construa e inicie o contêiner Docker:
    docker-compose up --build

### Localmente

1. Inicie o servidor de desenvolvimento Laravel:
    php artisan serve --port=9001

## Endpoints da API

- `GET /api/books`: Lista todos os livros.
- `POST /api/books`: Cria um novo livro.
- `PUT /api/books/{id}`: Atualiza um livro existente.
- `DELETE /api/books/{id}`: Deleta um livro.

## Serviços

- `WeatherService`: Serviço para buscar a previsão do tempo usando a API do HG Brasil.
