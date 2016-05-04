FROM node:6
RUN npm install -g jasmine-node
COPY package.json /app/
WORKDIR /app
RUN npm install
COPY . /app
ENTRYPOINT npm start