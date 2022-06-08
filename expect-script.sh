#!/usr/bin/expect -f

set timeout -1

spawn psql -U testuser -d testdb

expect "testdb=#"

send "psql -c \"CREATEUSER replication REPLICATION LOGIN CONNECTION LIMIT 1 ENCRYPTED PASSWORD'YOUR_PASSWORD';\"\n"


expect "testdb-#"

sleep 5

send "\\q\n"

interact