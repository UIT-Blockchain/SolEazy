# Guzer



### Setup project
### 1. FE
```
yarn && yarn app:dev
```

### 2. BE
## Prerequisite: *docker, docker-compose, [migrate](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)*
- If you dont have migrate, please run this following command:
  - Download: 
  ```
  curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.2/migrate.linux-amd64.tar.gz | tar xvz
  ```
  - Using `ls` to check if the `migrate` binary have existed?
  - Alias: 
  ```
  sudo ln -sf [your-directory-which-includes-migrate-binary-file]/migrate /usr/bin/migrate
  ```
  - Run this command to check migrate:
  ``` migrate```
  
 - After installing migrate, run `yarn server`
 - Done :v
 
 ## Some errors can be occured, let you check `/server/Makefile`



