psql -U testuser -d testdb
apk add expect
expect expect-script.sh
su postgres
/usr/local/bin/pg_ctl restart
