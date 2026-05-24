# STAGE 1: Build the frontend
FROM node:20-alpine AS frontend_builder

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

COPY ./frontend /app

RUN npm run build


# STAGE 2: full stack image

FROM node:20-alpine  

WORKDIR /app

COPY ./backend/package*.json /app

RUN npm install

COPY ./backend /app

# Copy the built frontend from the previous stage

COPY --from=frontend_builder /app/dist /app/public

CMD ["node","server.js"]