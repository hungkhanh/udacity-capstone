FROM node:16

WORKDIR /app

COPY backend/package*.json /app

RUN npm install

COPY backend /app

EXPOSE 3000

CMD ["npm","start"]