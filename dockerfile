FROM node:12.16.3-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]