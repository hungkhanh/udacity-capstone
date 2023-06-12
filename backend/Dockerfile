FROM node:18

WORKDIR /app

# COPY package*.json /app

# RUN npm install

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD ["node","dist/main.js"]