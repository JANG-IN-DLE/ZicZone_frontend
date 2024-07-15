# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple server to serve the built application
RUN npm install -g serve

# Command to run the application
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000