#!/bin/bash

cp .env.production .env
docker-compose up --build -d
docker exec -it collabcode_backend_1 dbmate migrate
