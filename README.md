[Live Preview Link](https://nextchatapp-sand.vercel.app/)
NOTE: This app isn't responsive yet for small devices we will work on it and make it compatible sooner.

Chat App
This is a simple chat application built with Next.js on the front-end and Firebase as the backend. The app utilizes the Tailwind CSS framework for styling and is deployed on Vercel. It allows users to engage in real-time conversations with each other.

Features
Real-time chat functionality.
User authentication using Firebase.
Simple and intuitive user interface.
Responsive design for seamless usage on different devices.
Technologies Used
Next.js
Firebase
Tailwind CSS
Vercel
Prerequisites
Before running the chat app, make sure you have the following installed:

Node.js (at least version 12.x.x)
npm or yarn package manager
Firebase account and project set up

Getting Started
1. Clone the repository:
git clone https://github.com/sidharthhhh/nextchatapp.git

2. Navigate to the project directory:
cd nextchatapp

3. Install dependencies:
npm install

4. Set up Firebase project:
Create a new project in the Firebase console.
Enable the Firebase Authentication service and set up your desired authentication method.
Create a Realtime Database and set the rules to allow read and write access.
Obtain your Firebase configuration settings (API keys, database URL, etc.).

5.Configure Firebase in the app:
Rename .env.example to .env.
Open the .env file and replace the placeholders with your Firebase configuration details.

6. Start the development server:
npm run dev

7. Open your browser and visit http://localhost:3000 to see the chat app in action.

Deployment

To deploy the chat app on Vercel, follow these steps:

1. Create an account on Vercel (https://vercel.com) if you haven't already.

2. Install the Vercel CLI globally:

npm install -g vercel

3. Log in to your Vercel account using the CLI:

vercel login

4. Initialize the project:

vercel init

5. Follow the prompts and choose the appropriate settings for your project.

6. Deploy the app:

vercel

7. Once the deployment is complete, you will receive a URL where your app is hosted.

Contributing

Contributions to the chat app are welcome! If you find any bugs or want to improve the functionality, please open an issue or submit a pull request. Make sure to follow the existing code style and conventions.

NOTE: This app isn't responsive yet for small devices we will work on it and make it compatible sooner.

Thank You!
