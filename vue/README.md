# docker-machineを起動
```
1. Docker Quickstart Terminalを起動
2. 以下のコマンドを叩く
$ docker-machine ssh default -L 80:localhost:80
※localhostを使わず、DockerのIP(192.168.99.100)をたたくようにした為、上記のコマンドは不要
```

# docker-composeを起動
```
自身のPC
$ cd /c/Users/<ユーザー名>/Documents/docker-laravel-vue/
$ docker-compose build
  ↑一度だけ実行するコマンド
$ docker-compose up -d
  ↑既にLaravelの手順で実行している場合は不要
```

# Docker内のVue.jsサーバに接続
```
自身のPC
$ cd /c/Users/<ユーザー名>/Documents/docker-laravel-vue/
$ docker-compose exec vue bash
```

# Vue.jsをインストールする手順
```
Docker内
# vue init webpack ec_web
```

# Vue.jsを起動する手順
```
Docker内
# cd ec_web
# npm install --no-bin-links
# HOST=0.0.0.0 PORT=80 npm run dev
```

ブラウザで以下URLを打鍵
http://192.168.99.100/

# Element UIの導入
npm install element-ui -s

# Vuexの導入
npm install vuex -s

# axiosの導入
npm install axios -s
