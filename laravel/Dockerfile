FROM php:7.2

# PHPからMySQLに繋ぐための準備
RUN docker-php-ext-install pdo_mysql

# Laravelを使用するためにcomposerをインストール
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

# パッケージのリストをサーバーから入手
RUN apt-get update

# zip,unzip,gitをインストール
RUN apt-get install -y zip unzip git
