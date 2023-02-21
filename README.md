# CatWiki

This is a basic CatWiki App where you can get details about different breeds of cats.
You can see the list of most searched breeds in the CatWiki home page.
Use search input to search for new breeds and select the breed name from the list for more details.

Note:
Unable to push the code to Heroku. It is asking for payment information.

## Starting the backend

To start up the backend Node.js server, run the following command in your
terminal (note: you'll need to have Node v16.x or above installed):

```
npm install
npm start
```

The server will run on port 3001 by default. You can test it by running
something like this:

```
curl localhost:3001/api
{"message":"Hello from CatWiki!"}
```

## Starting the frontend

Open a new tab, and run the following commands in your terminal:

```
cd client
npm install
npm start
```

This should open up a new page in your default web browser at `localhost:3000`.

## Running frontend tests

From the `client` directory, run the following:

```
npm test
```

This will run the test suite for you.

