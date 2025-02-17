FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY server.js ./
COPY models ./models

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "server"]