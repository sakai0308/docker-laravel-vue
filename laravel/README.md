# docker-machineを起動
```
1. Docker Quickstart Terminalを起動
2. 以下のコマンドを叩く
$ docker-machine ssh default -L 8000:localhost:8000
```

# docker-composeを起動
```
自身のPC
$ docker-compose build
  ↑一度だけ実行するコマンド
$ docker-compose up -d
  ↑既にVue.jsの手順で実行している場合は不要
```

# Docker内のLaravelサーバに接続
```
自身のPC
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
# php artisan serve --host 0.0.0.0
```

ブラウザで以下URLを打鍵
http://localhost:8000/
