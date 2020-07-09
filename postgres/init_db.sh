#!/bin/bash

# login as postgres: psql -h localhost -p 5432 -U postgres
psql -h localhost -p 5432 -U postgres -d postgres
psql -h localhost -p 5432 -U postgres -W -f sql_init.sql
