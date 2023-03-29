FROM node:current-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 80

CMD ["npm", "start"]
