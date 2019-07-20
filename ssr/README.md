# SSR

## serverless

Follow below guide to deploy to AWS lambada.

### Install Dependencies

```bash
npm install --save @types/aws-serverless-express
npm install --save aws-serverless-express
npm install --save-dev serverless
```

### Coding

Add below code in `server.ts`:

```typescript
import * as awsServerlessExpress from 'aws-serverless-express';

const server = awsServerlessExpress.createServer(app);

export const handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
```

### Deployment

Add `serverless.yml` for AWS lambda deployment.

```yml
service: instapocketpro-app

provider:
  name: aws
  runtime: nodejs8.10
  stage: production
  region: us-west-1
  environment:
    NODE_ENV: production

functions:
  app:
    handler: dist/server.handler
    events:
      - http:
          path: /
          method: get
      - http:
          path: "{proxy+}"
          method: get

package:
  exclude:
    - '**'
  include:
    - dist/**

```
