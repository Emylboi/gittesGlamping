Node modules skal nok installeres gennem:

NPM i.

.env.local ser sådan ud:

<!-- # Secret Variables for use in Server Application.
NODE_ENV=production

SERVER_PORT=3042
SERVER_HOST=http://localhost:3042


MONGODB_URI=mongodb://127.0.0.1:27017/glamping1

# JWT
JWT_EXPIRES_IN="24h"
JWT_SECRET="74ef149f2e21b383c9dd0ffe801e550e7e79e78b3ebd32e8cbcc1132346b4872"
 -->

Både server og client er i samme Github respository.
Jeg har altid åbnet dem hver for sig, frem for i samme vscode, så er ikke sikker på om det fungerer at have både server og client kørende i samme vscode, da npm scripts ikke var tilgængelig på den måde.
