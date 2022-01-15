FROM mysql

ENV MYSQL_ROOT_PASSWORD "root"
ENV MYSQL_DATABASE "mydb"

EXPOSE 3306

COPY db.sql /docker-entrypoint-initdb.d/