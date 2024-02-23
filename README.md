# Movie and TV Show Exploration Project

Welcome to the Movie and TV Show Exploration Project! This project is designed to help users explore a wide variety of movies and TV shows, providing information such as genres, ratings, release dates, and more.

## Features

- **Explore Movies and TV Shows**: Users can browse through a vast collection of movies and TV shows.
- **Search Functionality**: Users can search for specific movies or TV shows using the search bar.
- **Genre Filters**: Users can filter content by genre to find movies and TV shows in their preferred categories.
- **Recommendations and Similar Content**: The project provides recommendations and similar content based on the user's selected movie or TV show.
- **Detailed Information**: Users can access detailed information about each movie or TV show, including cast, crew, ratings, and more.

## Technologies Used

- **Vite**: Vite is used as the build tool for fast and efficient development with React.
- **React**: A popular JavaScript library for building user interfaces.
- **Redux**: Redux is used for state management, allowing for efficient data flow throughout the application.
- **React Router**: React Router is used for declarative routing, enabling navigation between different pages of the application.
- **API Integration**: The project integrates with [TMDB](https://www.themoviedb.org/) API to fetch movie and TV show data, including information such as genres, ratings, and recommendations.
- **Lazy Loading**: Images and content are lazy-loaded to improve performance and reduce initial load times.

## Installation

To run the project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Create a account on [TMDB](https://www.themoviedb.org/).
5. Obtain your API token from TMDB.
6. Create a .env file in the project root directory.
7. Add your TMDB API token to the .env file using the following format: VITE_APP_TOKEN_TMDB=your_token_here.
8. After adding the API token to the .env file, save it.
9. Run npm run dev to start the development server.

## Credits

This project was created by Siddharth. Special thanks to [TMDB](https://www.themoviedb.org/) for their amazing API.
