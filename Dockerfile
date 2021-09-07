FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN npm install --production
RUN npm build

CMD "npm start"