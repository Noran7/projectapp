hatGPT-Style Chat App

A simple **React Native (Expo)** chat application that simulates a ChatGPT-like experience.  
Users can send messages and receive **mock AI replies** via a local **Mock API**.

---

##  Features
- **Single Chat Screen** – clean and minimal interface.
- **Message Alignment**:
  - User messages on the **right**.
  - AI replies on the **left**.
- **Input Bar** at the bottom with a **Send** button.
- Uses a **Mock API** to simulate AI responses.
- Messages are stored **in memory** (no database required).

---

## Prerequisites
Make sure you have the following installed before running the project:

- [Node.js](https://nodejs.org/) 
- [Expo CLI](https://docs.expo.dev/) *(we use `npx` so no global install needed)*
- **Expo Go App** on your phone:
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

##  Getting Started

### Clone the Repository
```bash
git clone https://github.com/Noran7/projectapp.git
cd projectapp/chatapp
 Install Dependencies
bash
Copy
Edit
npm install
 Start the Mock API Server
Open a new terminal and run:

bash
Copy
Edit
cd D:\projectapp\MockAPI
node server.js
If successful, you should see:

arduino
Copy
Edit
 Mock API running on http://localhost:3001
 Run the App
In another terminal, start the app:

bash
Copy
Edit
cd D:\projectapp\chatapp
npx expo start
Scan the QR Code using the Expo Go App.

The app will open automatically on your phone .

 Project Structure
bash
Copy
Edit
projectapp/
├── chatapp/           # React Native app
│   ├── App.js         # Main app file
│   ├── components/    # (Optional) UI components
│   ├── package.json   # Dependencies
│   └── ...
└── MockAPI/           # Mock API server
    ├── server.js
    └── package.json
 Useful Resources
Expo Documentation

React Native Documentation

Developer
Name: Noran Khalil
Project: React Native Skill Test – Chat App
