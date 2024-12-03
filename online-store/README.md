# OnlineStore

This project is a simple online store application built using **Angular**, **Firebase**, and **Bootstrap**.

## Technologies Used

- **Angular**: Framework for building the frontend of the application.
- **Firebase**: Used for backend services such as authentication and data storage.
- **Bootstrap**: For styling the user interface and creating a responsive design.

## Instructions

1. Clone this repository to your local machine.

   ```bash
   git clone <repository-url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a project in [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase project's credentials and add them to the `src/environments/environment.ts` file:

     ```typescript
     export const environment = {
       production: false,
       firebaseConfig: {
         apiKey: "YOUR_API_KEY",
         authDomain: "YOUR_AUTH_DOMAIN",
         projectId: "YOUR_PROJECT_ID",
         storageBucket: "YOUR_STORAGE_BUCKET",
         messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
         appId: "YOUR_APP_ID"
       }
     };
     ```

4. Start the development server:

   ```bash
   ng serve
   ```

   The application will be available at [http://localhost:4200](http://localhost:4200).

## Description

This app is designed to simulate a simple online store where users can view products and make purchases. It integrates with Firebase for authentication and data storage, and uses Bootstrap for a responsive design.

## Notes

- Firebase tokens need to be configured in `src/environments/environment.ts` for proper functionality.
- The app is a simple example to demonstrate integrating Angular with Firebase and Bootstrap for creating real-world applications.
