FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD ["npm", "start"]