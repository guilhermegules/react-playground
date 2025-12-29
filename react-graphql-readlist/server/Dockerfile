FROM node:alpine

EXPOSE 4000

COPY package.json package.json

RUN npm install

COPY ./ ./

CMD npm start