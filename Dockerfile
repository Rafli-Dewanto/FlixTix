FROM node:18-alpine

WORKDIR /app

# atau bisa juga COPY package.*json .
COPY package*.json /app

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
