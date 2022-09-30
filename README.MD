# Shark games


## .env files
### server/.production(development).env structure:

#### PORT - port for backend. For example: 3001
#### DB_HOST - database host. For example: localhost
#### DB_PORT - database port. For example: 5432
#### DB_USERNAME - database username
#### DB_PASSWORD - database password
#### DB_DATABASE - database name
#### SALT_ROUNDS - rounds of salt for hashing
#### CORS_URL - url for cors. For example: 127.0.0.1:3000
#### LAVA_JWT - JWT key for Lava.org
#### LAVA_WALLET - Wallet for Lava.ru(rubles)
#### HOOK_URL - Url for getting of hooks from Lava.ru(for localhost not working). For example http://45.67.57.196:3001/api/v1/pay/get-hook
#### SUCCESS_URL - Url for success redirect(don't use http://localhost...). For example: http://127.0.0.1:3000/success/
#### FAIL_URL - Url for fail redirect(don't use http://localohost...). For example: http://127.0.0.1:3000/fail