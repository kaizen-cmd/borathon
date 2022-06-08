FROM postgres:12.7-alpine
RUN apk install -y expect
COPY expect-script.sh expect-script.sh
RUN sh expect-script.sh
COPY  postgresql.conf /var/lib/postgresql/data/postgresql.conf
ENV PGDATA=/var/lib/postgresql/data
USER postgres
RUN /usr/local/bin/pg_ctl restart
