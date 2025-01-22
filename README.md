
# **Real-Time Random Number Viewer**

## **Project Overview**
This project is a two-page web application built using **Next.js** and **Node.js**. It demonstrates real-time communication between a backend server and a frontend client. The backend sends random numbers to a "room" every 10 seconds using **Socket.IO**, and the frontend dynamically displays these numbers in real time. In addition to the original requirements, I extended the project with several creative features, which are detailed below.

---

## **Steps to Complete the Project**

### **1. Planning**
- [x] Review the project requirements.
- [x] Identify tools and libraries to be used:
  - Backend: Node.js, Express, Socket.IO.
  - Frontend: Next.js, Socket.IO-client, Recharts (for charts), CSS (for styling).
- [x] Plan project structure:
  - Separate backend and frontend repositories.
  - Use modular file organization.

---

### **2. Backend Setup**

#### **Environment Setup**
- [x] Install Node.js on the development machine.
- [x] Initialize a new Node.js project:
  ```bash
  npm init -y
  ```
- [x] Install required dependencies:
  ```bash
  npm install express socket.io cors
  ```

#### **Server Implementation**
- [x] Set up an Express server.
- [x] Configure `Socket.IO` for real-time communication.
- [x] Handle client connections and room joining:
  - [x] `connection`: Log when a client connects.
  - [x] `joinRoom`: Allow clients to join a specific room.
  - [x] `disconnect`: Log when a client disconnects.
- [x] Create a timer that:
  - [x] Counts down from 10 to 0.
  - [x] Sends a random number and resets the timer at 0.
  - [x] Updates clients with the timer value every second.
- [x] Test the backend to ensure it broadcasts the correct events:
  - `newNumber` for random numbers and timer resets.
  - `updateTimer` for countdown updates.

---

### **3. Frontend Setup**

#### **Initialize the Project**
- [x] Create a Next.js project:
  ```bash
  npx create-next-app real-time-app-frontend
  ```
- [x] Install Socket.IO-client:
  ```bash
  npm install socket.io-client recharts
  ```

#### **Main Page (/)** 
- [x] Create the Main Page component.
- [x] Add a welcome message.
- [x] Create a button to navigate to `/data`.

#### **Data Page (/data)**
- [x] Create the Data Page component.
- [x] Integrate the `socket.js` utility:
  - [x] Add functions for initializing and retrieving the socket instance.
- [x] Implement real-time updates:
  - [x] Join the "randomNumbersRoom".
  - [x] Listen for `newNumber` and `updateTimer` events.
  - [x] Update the displayed random number and timer dynamically.

#### **Enhance the UI**
- [x] Style the pages using CSS modules:
  - Main Page: Simple design with a button.
  - Data Page: Responsive layout with chart and table.
- [x] Use blue-and-white color codes with an Arctic water source background.

#### **Additional Features**
- [x] Add a **countdown timer** synchronized with the backend.
- [x] Implement a **line chart** to visualize random number trends.
- [x] Create a **table** to display random numbers with timestamps.

---

### **4. Deployment**

#### **Set Up VPS**
- [x] Acquire a Virtual Private Server (VPS).
- [x] Set up the server environment:
  - [x] Install Node.js.
  - [x] Install Nginx as a web server.
  - [x] Install PM2 for managing Node.js processes.

#### **Deploy the Backend**
- [x] Transfer backend code to the VPS.
- [x] Start the backend using PM2:
  ```bash
  pm2 start server.js
  ```

#### **Deploy the Frontend**
- [x] Transfer frontend code to the VPS.
- [x] Build the Next.js application:
  ```bash
  npm run build
  ```
- [x] Start the frontend application using PM2.

#### **Set Up Nginx**
- [x] Configure Nginx as a reverse proxy:
  - [x] Route `/` to the frontend.
  - [x] Route `/api` to the backend.
- [x] Secure the application with an SSL certificate:
  - [x] Install Certbot.
  - [x] Obtain and configure an SSL certificate.
- [x] Test the deployment by accessing the application via the custom domain with HTTPS.

---

## **Enhancements Beyond the Requirements**

### **1. Real-Time Countdown Timer**
I added a countdown timer synchronized with the backend, ensuring complete alignment with random number updates.

### **2. Line Chart Visualization**
Using **Recharts**, I implemented a line chart that dynamically updates to show trends in random numbers over time.

### **3. Data Table with Timestamps**
To provide historical context, I included a table displaying each random number alongside its timestamp.

### **4. UI Design Inspired by Watergenics**
- Designed a blue-and-white theme to match the spirit of Watergenics.
- Added an Arctic water source background for thematic relevance.

---

## **Challenges Faced and Solutions**

### **Challenge 1: Timer Synchronization**
#### **Problem**
- [x] The countdown timer was initially implemented on the **frontend**, starting when the Data Page loaded.
- [x] This caused a mismatch with the backend timer, which reset every 10 seconds.

#### **Troubleshooting**
- [x] Investigated the root cause by checking the flow of timer logic between frontend and backend.
- [x] Observed that the frontend started its own timer independently, leading to discrepancies.

#### **Solution**
- [x] Moved the timer logic to the **backend**:
  - [x] Updated the backend to include the timer value in the `newNumber` event.
  - [x] Modified the frontend to receive and display the timer value from the backend instead of maintaining its own timer.
- [x] Tested the solution by ensuring the frontend timer reset perfectly with the backend's updates.

---

### **Challenge 2: Duplicate Room Join Requests**
#### **Problem**
- [x] Upon navigating to the **Data Page**, the `joinRoom` event was emitted twice.
- [x] This caused the backend to log duplicate `User joined room: randomNumbersRoom` messages.
- [x] The issue occurred because **React Strict Mode** in development caused `useEffect` to run twice.

#### **Troubleshooting**
- [x] Analyzed the behavior of `useEffect` and found that it was being executed twice in development mode.
- [x] Confirmed the issue was caused by **React Strict Mode**, which intentionally mounts and unmounts components twice to catch potential bugs.

#### **Solution**
- [x] Disabled **React Strict Mode** in the `next.config.js` file by setting:
  ```javascript
  const nextConfig = {
    reactStrictMode: false,
  };
  module.exports = nextConfig;
  ```
- [x] Verified that `useEffect` only executed once after the change.
- [x] Tested the solution to ensure only a single `joinRoom` event was emitted.

---

## **Conclusion**
This project successfully demonstrates real-time data synchronization using Socket.IO. Through thoughtful planning and problem-solving, I enhanced the application beyond the original requirements, delivering a professional and visually appealing solution.
