FROM node:16

WORKDIR /app

COPY frontend/package*.json /app

RUN npm install --force

COPY frontend /app

EXPOSE 8080

CMD ["npm","start"]