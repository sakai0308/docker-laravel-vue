# Vue.jsをインストールする手順
```
自身のPC
$ docker-compose build
  ↑既にLaravelの環境構築時に実行している場合は不要
$ docker-compose up -d
$ docker-compose exec vue bash

Docker内
# vue create ec_web
```

# Vue.jsを起動する手順
```
Docker内
# cd ec_web
# HOST=0.0.0.0 PORT=80 yarn serve

自身のPC
ブラウザ打鍵前に以下のコマンドを叩く
```
$ docker-machine ssh default -L 80:localhost:80
```

ブラウザで以下URLを打鍵
http://localhost/
```
