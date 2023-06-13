FROM node:18

WORKDIR /app

COPY backend/package.json /app/

COPY backend /app/

RUN npm install

EXPOSE 3000

CMD ["npm","start"]