FROM php:8.2.1-fpm-alpine

RUN apk add --no-cache git bash

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN apk update
RUN export PHP_AUTOCONF=/usr/bin/autoconf
RUN apk add php-pear
RUN apk add autoconf
RUN apk add build-base
RUN pecl install mongodb
RUN docker-php-ext-enable mongodb

RUN apk add --update nodejs npm

WORKDIR /var/www/html