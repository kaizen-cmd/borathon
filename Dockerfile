FROM postgres:12.7-alpine
COPY expect-script.sh /expect-script.sh
COPY post.sh /post.sh
# COPY postgresql.conf /var/lib/postgresql/data/postgresql.conf
ENV PGDATA=/var/lib/postgresql/data
