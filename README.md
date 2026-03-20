# Chat App

A full-stack real-time chat application built with React, Node.js, and WebSockets.

## Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **User Profiles**: Profile management with avatar uploads via Cloudinary
- **Responsive Design**: Built with Tailwind CSS for mobile and desktop
- **Modern Tech Stack**: React 19, Vite, Express.js, and MongoDB

## Tech Stack

### Frontend
- **React 19**: Latest React features and hooks
- **Vite**: Lightning-fast build tool and dev server with HMR
- **Tailwind CSS**: Utility-first CSS framework
- **Socket.io Client**: Real-time bidirectional communication
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API requests
- **React Hot Toast**: Toast notifications

### Backend
- **Node.js/Express**: RESTful API server
- **MongoDB/Mongoose**: Database and ODM
- **Socket.io**: WebSocket communication
- **JWT (jsonwebtoken)**: Authentication tokens
- **bcryptjs**: Password hashing
- **Cloudinary**: Image storage and optimization
- **CORS**: Cross-origin resource sharing

## Project Structure

```
chat-app/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context (auth, chat)
│   │   ├── lib/           # Utilities
│   │   └── assets/        # Static assets
│   └── index.html
│
└── server/                # Node.js backend
    ├── models/           # Mongoose schemas
    ├── controllers/      # Route handlers
    ├── routes/           # API routes
    ├── middleware/       # Express middleware
    └── lib/              # Utilities & config
```

## Installation

### Prerequisites
- Node.js v16+ and npm
- MongoDB database
- Cloudinary account (for image uploads)

### Setup Instructions

1. **Clone and install dependencies:**
   ```bash
   cd chat-app/client && npm install
   cd ../server && npm install
   ```

2. **Configure environment variables:**

   **Server (.env)**:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

   **Client (.env)**:
   ```
   VITE_SERVER_URL=http://localhost:5000
   ```

3. **Start the application:**

   Terminal 1 (Backend):
   ```bash
   cd server
   npm run server  # with nodemon for development
   # or
   npm start      # production
   ```

   Terminal 2 (Frontend):
   ```bash
   cd client
   npm run dev
   ```

## Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm run server` - Start with nodemon (development)
- `npm start` - Start production server

## Key Features Implementation

### Authentication
- User registration and login with JWT tokens
- Protected routes and API endpoints
- Secure password hashing with bcryptjs

### Real-time Chat
- Socket.io for instant message delivery
- User online/offline status
- Typing indicators (optional)

### User Management
- User profile creation and updates
- Avatar upload to Cloudinary
- User search and friend list management

## API Endpoints

### User Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

### Message Routes
- `GET /api/messages/:userId` - Get conversation history
- `POST /api/messages/send` - Send message
- `DELETE /api/messages/:messageId` - Delete message

## Development

The application uses:
- **ESLint** for code quality
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive styling
- **Socket.io** for real-time communication

## Deployment

Both client and server include Vercel configuration files for easy deployment.

- **Live Application**: https://chat-app-psi-amber.vercel.app
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Vercel or similar Node.js hosting

## License

ISC
