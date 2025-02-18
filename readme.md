Certainly! Here’s a clear breakdown of the tasks:

1. *Create a New Node.js Application*
   - Create a new folder for your project.
   - Initialize a new Node.js project by creating a package.json file.

2. *Set Up Express Server*
   - Install the express package using npm.
   - Create an app.js file and set up a basic Express server in it.

3. *Configure Environment Variables*
   - Create a .env file in the root of your project.
   - Define the port number in the .env file.
   - Update app.js to use the port number from the .env file.

4. *Initialize Git Repository*
   - Initialize a Git repository by running git init.
   - Create a .gitignore file to exclude node_modules and other unnecessary files.

5. *Install Morgan for Logging*
   - Install the morgan package for logging HTTP requests.
   - Configure morgan in your Express server to log request details to the console.

6. *Set Up Routing*
   - Create a routes folder in your project.
   - Inside the routes folder, create a file named indexRouter.js.
   - Define a / route in indexRouter.js that responds with a welcome message and a status code of 200.
   - Test the route using Postman to ensure it is working as expected.

7. *Create and Apply Token Middleware*
   - In the routes folder, create a middleware function that checks for a token.
   - Add this middleware to the / route to validate the token.
   - Implement logic to handle token validation and test the middleware if available in headers of the request.