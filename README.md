# Fibonacci Assignment - Server

Implemented as a side quest!

## This is the backend

Made using NodeJS and Express.

Before starting the server, make sure you have NodeJS installed and run the command

```
npm install
```

To run the server, simply write the command

```
npm run start
```

## Endpoints

There are only two main endpoints, one for getting a calculation and saving to file and another to read from the saved file. Both are `GET` requests.

### Get calcualation

`/fibonacci/:n`

Where `n` is the number in the Fibonacci sequence you want to find

### Get history

`/fibonacci/history?limit=<int>`

Where limit is an optinal query param for limiting the amount of results you want to fetch from the file. The default is five results per query.
