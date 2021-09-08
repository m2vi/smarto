FROM node:14-slim

ENV NODE_ENV=production

WORKDIR /app

# install dependencies
RUN apt update
RUN apt install git
COPY package.json /app/package.json
RUN npm install --production

# build app
COPY . /app
RUN npm build

CMD npm run start