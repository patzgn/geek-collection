# Geek Collection
Geek Collection is a web-based application designed to help users manage their gaming experience by keeping track of games they are playing or have played. With the app, users can easily add games to their collection and label them with appropriate tags that indicate their progress.

The application is built using Spring Boot for the backend and React for the frontend.

## Prerequisites
To run the application, you will need to have the following installed:
- Java JDK 11 or later
- Node.js

## Installation
Clone the repository.
```
git clone https://github.com/patzgn/geek-collection.git
```

Navigate to the project directory and install the backend dependencies.
```
mvnw clean install
```

Navigate to the frontend directory and install the frontend dependencies.
```
npm install
```

## Configuration
Before running the application, you will need to configure the backend database settings. You can do this by modifying the `application.properties` file located in the `src/main/resources` directory.

## Running the Application
To run the application, navigate to the project directory and run the following command:
```
mvn spring-boot:run
```
This will start the backend server on `http://localhost:8080`.

To start the frontend server, navigate to the frontend directory and run the following command:
```
npm start
```
This will start the frontend server on `http://localhost:3000`.

## Usage
To use the application, open your web browser and navigate to `http://localhost:3000`.

## Contributing
If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to merge your changes into the main repository.
