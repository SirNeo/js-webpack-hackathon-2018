FROM node:8.9.4

# Create app directory
WORKDIR docker

RUN npm install

COPY package*.json ./

# Bundle app source
COPY . .

EXPOSE 8080

# Launch server
CMD [ "npm", "start" ]