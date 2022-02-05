FROM node:14-slim

WORKDIR /app

COPY ./package.json ./

RUN npm install

RUN npm audit fix

COPY . .


CMD [ "npm", "start" ]
