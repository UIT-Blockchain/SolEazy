# eBookstoreServer

# Makefile

1. Init postgres
  ```make bootstrap```
2. Init schema 
  ```make migrateup```
3. Insert data
  ```make init```

## other commands:

4. Drop all db:
  ```make migratedown```

5. Access bash
  ```make bash```
6. Sql commandline
  ```make psql```


### Install migrate on ubuntu
```
sudo apt-get install migrate
```
