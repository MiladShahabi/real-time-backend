# **Real-Time Random Number Viewer**

## **Project Overview**
This project is a two-page web application built using **Next.js** and **Node.js**. It demonstrates real-time communication between a backend server and a frontend client. The backend sends random numbers to a "room" every 10 seconds using **Socket.IO**, and the frontend dynamically displays these numbers in real time. In addition to the original requirements, I extended the project with several creative features, which are detailed below.

---

## **Steps to Complete the Project**

### **1. Planning**
Before starting, I outlined the tasks needed to complete the project:
1. Set up the backend with Node.js and Socket.IO.
2. Create a frontend using Next.js with routing between the Main Page and Data Page.
3. Implement real-time synchronization between the backend and frontend using Socket.IO.
4. Incorporate **enhancements beyond the requirements**, including visual and functional upgrades.

---

### **2. Backend Setup**
1. **Environment Setup**:
   - Installed and configured dependencies: `express`, `socket.io`, and `cors`.
   - Created a Node.js server and configured it to handle Socket.IO connections.

2. **Real-Time Logic**:
   - Generated random numbers every 10 seconds.
   - Broadcasted random numbers and countdown timers to connected clients in a "room."

---

### **3. Frontend Setup**
1. **Page Creation**:
   - Created the **Main Page** (/): A simple welcome page with navigation to the Data Page.
   - Created the **Data Page** (/data): Displays real-time random numbers and enhancements like the timer, chart, and table.

2. **Real-Time Communication**:
   - Integrated Socket.IO-client to connect to the backend.
   - Used `useEffect` to handle room joining and event listeners.

3. **Responsive Design**:
   - Implemented a responsive chart and ensured the layout adapts to different screen sizes.

---

### **4. Deployment**
1. Hosted the application on a **Virtual Private Server (VPS)** for global accessibility.
2. Configured **Nginx** as a web server for efficient request handling.
3. Set up an **SSL certificate** to enable secure HTTPS connections.
4. Connected the application to a custom **domain name**.

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
- **Problem**: The countdown timer was initially implemented on the frontend, causing discrepancies with the backend’s timing.
- **Solution**: Moved the timer logic to the backend. Now, the backend sends the timer value along with the random number, ensuring perfect synchronization.

---

### **Challenge 2: Duplicate Room Join Requests**
- **Problem**: Upon navigating to the Data Page, the `joinRoom` event was emitted twice, resulting in duplicate logs on the backend.
- **Solution**: Disabled **React Strict Mode** in `next.config.js`, which prevented `useEffect` from executing multiple times during development.

---

### **Conclusion**
This project successfully demonstrates real-time data synchronization using Socket.IO. Through thoughtful planning and problem-solving, I enhanced the application beyond the original requirements, delivering a professional and visually appealing solution.