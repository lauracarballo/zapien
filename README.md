# Zapien

A network that connects ethical and sustainable brands with conscious influencers and creators.

## Development

Run:

```
npm run dev
```

## Database setup

Start local Postgres instance:

```
pg_ctl -D /usr/local/var/postgres start
```

Create initial SQL schema:

```
psql -h localhost -d zapien -U james -f schema.sql
```

Sync data from Prisma Schema to Database:

```
npx prisma migrate save --experimental
npx prisma migrate up --experimental
```

Sync Database to Prisma Schema:

```
npx prisma introspect
```
