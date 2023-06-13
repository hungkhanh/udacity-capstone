FROM node:18

WORKDIR /app

COPY backend/package.json /app

RUN npm install

COPY backend /app

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]