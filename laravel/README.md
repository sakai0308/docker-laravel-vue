# docker-machineを起動
```
1. Docker Quickstart Terminalを起動
2. 以下のコマンドを叩く
$ docker-machine ssh default -L 8000:localhost:8000
※localhostを使わず、DockerのIP(192.168.99.100)をたたくようにした為、上記のコマンドは不要
```

# docker-composeを起動
```
自身のPC
$ cd /c/Users/<ユーザー名>/Documents/docker-laravel-vue/
$ docker-compose build
  ↑一度だけ実行するコマンド
$ docker-compose up -d
  ↑既にVue.jsの手順で実行している場合は不要
```

# Docker内のLaravelサーバに接続
```
自身のPC
$ cd /c/Users/<ユーザー名>/Documents/docker-laravel-vue/
$ docker-compose exec laravel bash
```

# Laravelをインストールする手順
```
Docker内
# composer create-project --prefer-dist laravel/laravel ec_api "5.6.*"
```

# Laravelを起動する手順
```
Docker内
# cd ec_api
# composer install
# php artisan serve --host 0.0.0.0
```

ブラウザで以下URLを打鍵
http://192.168.99.100:8000/

# Seedを実行し、テストデータ投入
```
Docker内
# php artisan key:generate ←いらない？
# cp -pr .env.example .env
# php artisan migrate
# php artisan db:seed
```
