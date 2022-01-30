FROM node:12

RUN mkdir -p /usr/src/dashboardapp

WORKDIR /usr/src/dashboardapp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]