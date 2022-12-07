bootstrap:
	docker-compose up -d --remove-orphans
createdb:
	docker exec -it postgres createdb --username=root --owner=root guzer 
dropdb:
	docker exec -it postgres dropdb guzer 

migrateup:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/guzer?sslmode=disable" -verbose up
migratedown:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/guzer?sslmode=disable" -verbose down
sqlc:
	sqlc generate
test:
	go test -v -cover ./...
psql:
	docker exec -it postgres psql -U root -d guzer 
bash:
	docker exec -it postgres /bin/bash
init:
	docker exec -it postgres psql -U root guzer -a -f guzer/initdb/products.sql
server:
	go run main.go
mock:
	mockgen -package mockdb -destination db/mock/store.go github.com/UIT-Blockchain/Guzer/db/sqlc Store
all: 
	make bootstrap && make migrateup 

.PHONY: boostrap  createdb dropdb migrateup migratedown sqlc test psql bash init server mock all 

