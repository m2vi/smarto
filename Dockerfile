FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

# install dependencies
RUN apk add --update --no-cache git
COPY package.json /app/package.json
RUN npm install --production

# build app
COPY . /app
RUN npm build

CMD "npm start"