# 베이스 이미지 설정
FROM node:20

# 작업 디렉토리 설정
WORKDIR /app

# 복사 package.json and package-lock.json
COPY package*.json ./

# 의존성 설치
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Install a simple server to serve the built application
# RUN npm install -g serve

# Nginx 설치
RUN apt-get update && apt-get install -y nginx

# Nginx 설정 복사
COPY nginx.conf /etc/nginx/nginx.conf

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]

# Expose port
EXPOSE 3000