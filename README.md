# Zapien

A network that connects ethical and sustainable brands with conscious influencers and creators.

## Development

Run:

```
npm run dev
```

## Database setup (locally)

Start local Postgres instance:

```
pg_ctl -D /usr/local/var/postgres start
```

Create Database (in pqsql):

```
> psql
CREATE DATABASE zapien;
```

Create initial SQL schema:

```
psql -h localhost -d zapien -U james -f schema.sql
```

Sync data from Prisma Schema to Database:

```bash
npm run migrate
# Confirm everything looks okay, then:
npx prisma migrate up --experimental
```

Sync Database to Prisma Schema:

```
npm run introspect
```
