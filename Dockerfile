FROM mongo:4.0.26

ADD uloe_db_setup.js /docker-entrypoint-initdb.d

EXPOSE 27017
