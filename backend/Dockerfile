# Use a imagem oficial do PHP com FPM 8.3
FROM php:8.3-fpm

# Instale extensões PHP necessárias
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    nginx \
    supervisor \
    && docker-php-ext-install zip pdo pdo_mysql

# Instale o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Defina o diretório de trabalho
WORKDIR /var/www/html

# Copie os arquivos do Laravel para o contêiner
COPY . .

# Instale as dependências do Composer
RUN composer install

# Copie o arquivo de configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie o arquivo de configuração do Supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Defina as permissões
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Supervisor
CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
