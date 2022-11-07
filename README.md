## Express API Starter

For local development please do the following steps:
```js
yarn
```

Then run local
```js
yarn dev
```

## Testing on local
Open Chrome and visit
```js
localhost:3009
// Should get JSON date time back

localhost:3009/ping
// Should get JSON pong
```

## Deployment
```
docker build -t express-example .
docker run -p "3009:3009" express-example
```