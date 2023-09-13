
# Trip Planner App

This is a trip planning and management app built with React and TypeScript. Users can browse upcoming trips, view trip details, add new trips, and manage their account.

## Features

- Browse upcoming trips in a list view
- Click on a trip to see all the details
- Search for trips by name or destination
- Sort/filter trips 
- View trip details like name, destination, dates, description, price, image and activities
- Register a new user account  
- Login/logout functionality
- Authenticated users can:
  - Create new trips
  - Edit/update existing trips
  - Delete trips
- Responsive design for mobile and desktop

## Usage

### Install Dependencies

```
npm install
```

### Run

```
npm start
```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Build

```
npm run build
```

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## File Structure

- **components** - Reusable React components 
- **contexts** - React contexts for state management
- **hooks** - Custom hooks for reusable logic
- **models** - TypeScript interfaces/models 
- **pages** - Page components for each route 
- **services** - Modules for API calls/business logic
- **utils** - Utility functions and constants

## Technologies

- [React](https://reactjs.org/) - Front-end framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing 
- [React Router](https://reacttraining.com/react-router/) - Routing 
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Date-FNS](https://date-fns.org/) - Date utilities
- [Axios](https://github.com/axios/axios) - HTTP requests

## Custom Hooks

- **useAuth** - Manages authentication state, login/logout
- **useTrips** - Handles fetching and managing trips
- **useUser** - Gets user info from API

## Contexts

- **AuthContext** - Current user and auth state
- **TripContext** - List of trips and trip methods

## Models

- **User** - User account info 
- **Trip** - Trip details and properties

## API

The backend API is a simple JSON server powered by [json-server](https://github.com/typicode/json-server). 

To start the server:

```
npm run server 
```

Base URL: `http://localhost:3000/api`

## To Do

- Improve search/filter for trips
- Email verification on registration 
- Forgot password functionality
- Notifications for new trips
- Pagination/infinite scroll for long trip lists
- Image upload for new trips 
- Live previews for new/updated trips

## Credit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


