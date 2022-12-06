package main

import (
	"database/sql"
	"log"

	"github.com/UIT-Blockchain/Guzer/api"
	db "github.com/UIT-Blockchain/Guzer/db/sqlc"
	"github.com/UIT-Blockchain/Guzer/util"
	_ "github.com/lib/pq"
)

func main() {
	// fmt.Println("Hello world")
	config, err := util.LoadConfig(".")
	if err != nil {
		log.Fatal("cannot load config:", err)
	}
	conn, err := sql.Open(config.DBDriver, config.DBSource)
	if err != nil {
		log.Fatal("cannot connect to the db...:", err)
	}
	store := db.NewStore(conn)

	server, err := api.NewServer(config, store)

	if err != nil {
		log.Fatal("cannot initialize the server...", err)
	}

	err = server.Start(config.ServerAddress)

	if err != nil {
		log.Fatal("cannot connect to the server...", err)
	}
}
