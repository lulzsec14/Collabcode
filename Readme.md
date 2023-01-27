## TO REPLICATE PROJECT IN YOUR LOCAL ENVIRONMENT
Run `docker compose up` to build images and start the containers.
Log into collabcode_mysql_1 container and run the following commands:

`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'toor';`

`flush privileges;`

Log into collabcode_backend_1 container and run the following command:

`dbmate migrate`

Now Application can be accessed on localhost:8080.