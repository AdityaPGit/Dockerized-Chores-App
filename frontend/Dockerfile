# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy all source files
COPY frontend/ ./

# Build the app for production
RUN npm run build

# Step 2: Serve the React app using a simple web server (e.g., Nginx)
FROM nginx:alpine

# Copy the build files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80
