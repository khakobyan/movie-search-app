Sure, here's a structured `README.md` for running and testing the app in both platforms:

---

# Movie Search App

This is a mobile application for searching movies. It allows users to browse through a collection of movies, view details about each movie, and search for specific titles.

## Features

- Browse a collection of movies
- View details about each movie
- Search for specific movie titles

## Installation

Before running the app, make sure you have the following dependencies installed:

- Node.js
- npm or yarn
- React Native CLI

### Steps to Install

1. Clone the repository:

```bash
git clone https://github.com/your-username/movie-search-app.git
```

2. Navigate to the project directory:

```bash
cd movie-search-app
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

## Running the App

### iOS

To run the app on iOS simulator, execute the following command:

```bash
npm run ios
# or
yarn ios
```

### Android

To run the app on Android emulator or connected device, execute the following command:

```bash
npm run android
# or
yarn android
```

## Testing

The app comes with a suite of tests to ensure its functionality is working as expected. You can run the tests using the following commands:

```bash
npm test
# or
yarn test
```

This will execute the test suite and provide feedback on the test results.

## Movie API SDK

Created movie API SDK it can be downloaded to npm or other js package registry and been used like this 

```
import React, { useEffect, useState } from 'react';
import { MovieAPIClient } from 'movie-api-sdk';

const apiKey = 'KEY';
const movieApiClient = new MovieAPIClient(apiKey);

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const randomMovies = await movieApiClient.fetchRandomMovies();
        setMovies(randomMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Random Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
