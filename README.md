# ShopSeek

ShopSeek is a full-stack single-page web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to search, filter, paginate, and sort products seamlessly. The website is fully responsive and designed with a mobile-first approach. Authentication is handled via Firebase, allowing users to sign in with Google or Email/Password.

## Live Site URL

Visit the live site at: [ShopSeek](https://shop-seek.web.app)

## Features

1. **Search and Filtering**: Search products by name and filter by brand name, category, and price range. Multiple filter criteria can be applied at once.
2. **Pagination**: Server-side pagination with Next/Previous navigation for optimized product loading.
3. **Sorting**: Sort products by price (Low to High, High to Low) and by date added (Newest first).
4. **Authentication**: Google and Email/Password authentication using Firebase.
5. **Responsive UI**: Mobile-first, responsive design to enhance user experience across devices.

## Technologies Used

- **Frontend**: React.js, daisy UI (for UI components and styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase Authentication (Google, Email/Password)

## Project Setup

### Prerequisites

- Node.js installed on your machine
- MongoDB set up locally or a cloud MongoDB instance (e.g., MongoDB Atlas)
- Firebase project for authentication

### Steps to Run Locally

1. **Clone the frontend repository:**
   ```bash
   git clone <frontend-repo-url>
   ```

2. **Navigate to the repository:**
   ```bash
   git clone <frontend-repo-url>
   ```

3. **Install dependencies:**

    ```bash
    cd frontend
    npm install
    ```

4. **Configure environment variables:** Create a `.env` file and add the necessary configurations.

5. **Start the development server:**

    ```bash
    npm start
    ```

6. **View the application in the browser:**

    Open `http://localhost:3000` in your browser.