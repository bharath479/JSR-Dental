# Stage 1 — Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Copy all source files
COPY . .

# Build your vite application
RUN yarn build

# Stage 2 — Serve with Nginx
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from builder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

