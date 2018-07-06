FROM node:9.2

MAINTAINER Adrián García Espinosa "age.apps.dev@gmail.com"

# Create app directory
WORKDIR /fullsd

# nodemon for development
RUN npm install -gq nodemon

COPY package.json ./

# Install npm and bower dependencies
RUN npm install -q

RUN npm install -g @angular/cli@1.7.4 --unsafe

# Bundle app source
COPY ./ ./

# EXPOSE '${PORT}'
ENV PORT 4200
EXPOSE 4200

CMD [ "npm", "start" ]
