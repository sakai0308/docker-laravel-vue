# docker-machineを起動
```
1. Docker Quickstart Terminalを管理者権限で実行
   ↑既に起動されている場合は不要

2. 以下のコマンドを叩く（ターミナルを管理者権限で起動すること）
$ docker-machine ssh default -L 80:localhost:80
```

# docker-composeを起動
```
自身のPC
$ docker-compose build
  ↑一度だけ実行するコマンド
$ docker-compose up -d
  ↑既にLaravelの手順で実行している場合は不要
```

# Docker内のVue.jsサーバに接続
```
自身のPC
$ docker-compose exec vue bash
```

# Vue.jsをインストールする手順
```
Docker内
# vue create ec_web
```

# Vue.jsを起動する手順
```
Docker内
# cd ec_web
# HOST=0.0.0.0 PORT=80 yarn serve
```

ブラウザで以下URLを打鍵
http://localhost/
