# Product List App

This is a product listing app built with Angular, Firebase, and Bootstrap.

## Technologies Used

- **Angular**: Framework for frontend development.
- **Firebase**: For authentication and data storage.
- **Bootstrap**: For UI design and styling.

## Instructions

1. Clone this repository to your local machine.
   
   ```bash
   git clone <repository-url>
   ```

2. Install the dependencies using npm:

   ```bash
   npm install
   ```

3. Set up your Firebase project:

   - Create a project in [Firebase Console](https://console.firebase.google.com/).
   - Get your project's credentials and add them to the `src/environments/environment.ts` file:

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

4. Run the application in development mode:

   ```bash
   ng serve
   ```

   You can now access the app at [http://localhost:4200](http://localhost:4200).

## Description

This app allows you to view a list of products. The data is fetched from Firebase, and user authentication is also handled via Firebase.

## Notes

- You must configure the Firebase tokens in the `environment.ts` file for the app to work correctly.
