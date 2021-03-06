// Purpose for file: This is the URL that the API will use depending on whether the app is running in development or production mode.

// Check in what environment we are in.
const dev = process.env.NODE_ENV !== 'production';

// Export the dev varibles
// Tenary operator to determine if the app is running in dev mode or production mode
export const server = dev ? 'http://localhost:3000' : 'http://localhost:3001';