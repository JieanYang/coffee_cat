#!/bin/bash

# login as postgres: psql -h localhost -p 5432 -U postgres
psql -h localhost -p 5432 -U me -d db
psql -h localhost -p 5432 -U me -W -f sql_init.sql
