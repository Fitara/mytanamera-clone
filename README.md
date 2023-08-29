## Project: MyTanamera App Clone with React Native and Fullstack Features

Welcome to the "Tanamera Coffee Clone" 1 WEEK project repository! This project aims to replicate the Tanamera Coffee website using React Native for the mobile app and incorporating fullstack features. The project covers a variety of technologies and concepts, starting with React Native development, NoSQL and SQL databases, microservices architecture, GraphQL, Redis caching, and Docker implementation. Let's dive into the project structure, targets, and key features:

### UI Library: React Native

UI components will be created using React Native, allowing for the development of a native mobile app with a user-friendly interface.

### Project Structure:

- `client-mobile/`: Contains the React Native mobile app code.
- `server/`: Contains the Express.js back-end code.
  - `orchestrator/`: Orchestrates communication between services (port: 4000).
  - `orchestrator-express/`: Orchestrator using Express (port: 4000).
  - `services/`: Microservices for various functionalities.
    - `users/`: Handles user data using MongoDB (port: 4001).
    - `app/`: Manages app-related data using PostgreSQL (port: 4002).

### Mobile App Development with React Native:

- Gain an understanding of React Native and Expo.
- Install expo-cli, initialize a mobile project, and set up the project structure.
- Experiment with core React Native components such as Text, View, Image, StyleSheet, Button, ScrollView, and FlatList.
- Implement useState and useEffect in the React Native context.
- Access data from the API server.
- Utilize React Navigation for user-friendly navigation.
- Develop multiple screens, including a dynamic home page and detailed product pages.
- Integrate Redux and Redux-Thunk for global state management.
- Implement authentication for admin users and private routes.
- Create admin management pages and enable CRUD operations for primary and secondary entities.
- Integrate GraphQL for more efficient data querying and mutations.
- Explore caching strategies using Redis and ioRedis.
- Understand Docker and implement Docker for the server application.

### How to Access the Project:

1. **Clone Repository:** Clone this repository to your local machine.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install required packages.

3. **Database Configuration:** Configure PostgreSQL database connection details in `server/config/config.json`.

4. **Run the Server:** Navigate to `server/` and start the server with `npm start`.

5. **Mobile App Access:** Navigate to `client-mobile/` and start the mobile app using Expo Go. Access the user interface and admin interface as needed.

### Contribution:

Contributions are welcome! Follow these steps to contribute:

1. Fork this repository to your GitHub account.
2. Create a new branch for your feature (e.g., `new-feature`).
3. Implement the feature and commit your changes (e.g., `git commit -m "Add new feature"`).
4. Push changes to your branch on GitHub (e.g., `git push origin new-feature`).
5. Submit a Pull Request for review.

### License:

This project is licensed under the MIT License, allowing usage within the terms of the license.

Thank you for exploring the "Tanamera Coffee Clone" project with comprehensive fullstack features! If you have questions or feedback, create a new issue in this repository. Enjoy exploring and developing with the "Tanamera Coffee Clone" project!
