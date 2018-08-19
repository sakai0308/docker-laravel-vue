# Laravelをインストールする手順
```
自身のPC
$ docker-compose build
  ↑既にVue.jsの環境構築時に実行している場合は不要
$ docker-compose up -d
$ docker-compose exec laravel bash

Docker内
# composer create-project --prefer-dist laravel/laravel ec_api "5.6.*"
```

# Laravelを起動する手順
```
Docker内
# cd ec_api
# php artisan serve --host 0.0.0.0

自身のPC
ブラウザで以下URLを打鍵
http://localhost:8000/
```
