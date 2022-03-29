---
sidebar_position: 1
---

# Create Mongodb Container

The following is an example of using docker `secrets` and `volumes` to create a secure MongoDb Container.

## Docker-compose

```docker
version: "3.8"
services:
  mongodb:
    build: ./mongodb
    ports:
      - 27017:27017
    environment:
      - MONGO_INITDB_ROOT_USERNAME_FILE=/run/secrets/mongodb_root_username
      - MONGO_INITDB_ROOT_PASSWORD_FILE=/run/secrets/mongodb_root_password
      - MONGO_USERNAME_FILE=/run/secrets/mongodb_username
      - MONGO_PASSWORD_FILE=/run/secrets/mongodb_password
      - MONGO_INITDB_DATABASE=admin
      - MONGO_DATABASE=mydb
    volumes:
      - mongodata:/data/db
    secrets:
      - mongodb_root_username
      - mongodb_root_password
      - mongodb_username
      - mongodb_password
secrets:
  mongodb_root_username:
    file: ./mongodb/.mongodb_root_username
  mongodb_root_password:
    file: ./mongodb/.mongodb_root_password
  mongodb_username:
    file: ./mongodb/.mongodb_username
  mongodb_password:
    file: ./mongodb/.mongodb_password
volumes:
  mongodata:
    external: false

```

:::info
Dont try and mount to a windows file system. A docker volume is required on Windows. You can mount a folder directly to local host using wsl2 but you should be out of the `/mnt/c` and most likely in `~\`
:::

## Folder structure

The following is a good folder structure for working with MongoDb containers.

📝.gitignore \
📝docker-compose.yaml\
📁mongodb \
&emsp; 📝.mongodb_password\
&emsp; 📝.mongodb_root_password\
&emsp; 📝.mongodb_root_username\
&emsp; 📝.mongodb_username\
&emsp; 📝Dockerfile\
&emsp; 📝mongo-init.sh

:::note
The . files in the `mongodb` directory should contain your run time secrets which will be mounted as volumes at `/run/secrets/<secretname>` inside the container.
:::

## Dockerfile and init override

We will want to override the `/docker-entrypoint-initdb.d/` with the following mongo-init.sh file and add a Dockerfile to our `mongodb` directory.

```shell
#!/bin/bash
file_env() {
    local var="$1"
    local fileVar="${var}_FILE"
    local def="${2:-}"
    if [ "${!var:-}" ] && [ "${!fileVar:-}" ]; then
        echo >&2 "error: both $var and $fileVar are set (but are exclusive)"
        exit 1
    fi
    local val="$def"
    if [ "${!var:-}" ]; then
        val="${!var}"
    elif [ "${!fileVar:-}" ]; then
        val="$(<"${!fileVar}")"
    fi
    export "$var"="$val"
    unset "$fileVar"
}
file_env "MONGO_USERNAME"
file_env "MONGO_PASSWORD"
mongo -- ${MONGO_INITDB_DATABASE} <<EOF
const MONGO_INITDB_ROOT_USERNAME = '$MONGO_INITDB_ROOT_USERNAME';
const MONGO_INITDB_ROOT_PASSWORD = '$MONGO_INITDB_ROOT_PASSWORD';
const MONGO_DATABASE = '$MONGO_DATABASE';
const MONGO_USERNAME = '$MONGO_USERNAME';
const MONGO_PASSWORD = '$MONGO_PASSWORD';
db.auth(MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD);
var db = db.getSiblingDB(MONGO_DATABASE)
db.createUser({user: MONGO_USERNAME, pwd: MONGO_PASSWORD, roles: [{role: 'readWrite', db: MONGO_DATABASE}]});
EOF

```

### Understanding the init override.

`file_env` will get value of `"MONGO_USERNAME"` from the secret file and export it into the environment of the container.

Mongo command will execute the script inside the EOF block. The script helps log in as the root user, create mydb database, then creates a user.

Create the `Dockerfile` to pull the image and copy the mongo-init.sh to the container.

```docker
FROM mongo:latest
ADD ./mongo-init.sh /docker-entrypoint-initdb.d/
```

## Connect via MongoCompass or 3T

The following will be the url to connect to Mongodb container.

***mongodb://<username>:<password>@mongodb:27017/mydb***

:::info
If your connecting via Windows Host, you'll want to use
***mongodb://<username>:<password>@host.docker.internal:27017/mydb***
:::


## Downloads
[MongoCompass Community](https://www.mongodb.com/products/compass)\
[Studio 3T](https://studio3t.com/?keyword=%2Bmongo%20%2Bdb%20%2Btools&msclkid=401fca2b8e141188f510a869265fab2c&utm_source=bing&utm_medium=cpc&utm_campaign=GS%20%7C%20Generic%20%7C%20US&utm_term=%2Bmongo%20%2Bdb%20%2Btools&utm_content=MongoDB%20Tools%20%28broad%29)