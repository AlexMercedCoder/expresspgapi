## USING THIS TEMPLATE:

- Make sure to run npm install

- Environmental variables defined in env.yaml, so create a env.yaml that looks like this or rename template.env.yaml to env.yaml...

```yaml
development:
  PORT: 4000
  SECRET: "production"

production:
  PORT: 3000
  SECRET: "development"
```

- auth.js has most of the auth middleware logic built out, just create a verify user function based on your particular database setup.

- cors whitelist defined in config/cors.js, when in a non-production environment it will allow all traffic, in production it will work off the whitelist.

## Commands

`npm run dev` run dev server look for env.yaml for environmental variables

`npm run start` run in production more, not look for env.yaml

`npm run devdbsetup` run makeSchemas.js using dev database

`npm run dbsetup` run makeSchemas.js using prod database

`npm run devseed` run seedFile.js using dev database

`npm run seed` run seedFile.js using prod database

## WORKFLOW

- DEFINE A TABLE IN MAKE SCHEMAS THEN RUN devdbsetup or dbsetup
- CREATE A MODEL - use ratModel.js as a template
- SEED DATA using seedFile.js

## TO USE KNEX MIGRATIONS

_Read Knex Documentation: http://knexjs.org/#Migrations-CLI_

- download the knex CLI globally `sudo npm i -g knex`
- make a new migration file `knex migrate:make filename`
- migrate to the target database based on NODE_ENV
  `NODE_ENV=development knex migrate:latest`
  `NODE_ENV=staging knex migrate:latest`
  `NODE_ENV=production knex migrate:latest`

MAKE SURE TO JOIN THE SLACK AND DISCORD COMMUNITIES AT DEVNURSERY.COM
