# skiddle-app

React web application that allows users to search for events,
obtain events details and get any artist details related to that event.

## Relevant API endpoints:
Use following API key: 008f1e6099ecc48e990e3776784d447b for the technical task.

### Events search:

```

GET https://www.skiddle.com/api/v1/events/search
Params: api_key, keyword

```
### Event details:
``` 

GET https://www.skiddle.com/api/v1/events/{EVENT_ID}
Params: api_key

```

### Artist details:

```

GET https://www.skiddle.com/api/v1/artist/{ARTIST_ID}
Params: api_key

```

More information on the endpoints and parameters can be found on:

https://github.com/Skiddle/web-api

### Assets
Find relevant assets and logos at https://www.skiddle.com/logo/ to use in your React
application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>