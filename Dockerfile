FROM node:latest as builder

MAINTAINER Claudiu Gombos "claudiu9379@gmail.com"

run apt-get update -q	
RUN apt-get install -y curl nginx


# Create app directory
WORKDIR /fullsd

RUN ["echo", "hello"]

#RUN ["/bin/bash", "node" , "-v"]

# nodemon for development
RUN npm install -gq nodemon

COPY package.json ./

# Install npm and bower dependencies
RUN npm install -q

RUN npm install -g @angular/cli@1.7.4 --unsafe

# Bundle app source
COPY ./ ./




# EXPOSE '${PORT}'
#ENV PORT 4200
#EXPOSE 4200

#RUN $(npm bin)/ng build --prod

RUN cd appserver
RUN npm run installserver

RUN npm install koa-jwt -q

CMD [ "node", "appserver/server_koa_2.js" ]

#CMD [ "npm", "start" ]

COPY nginx/nginx.conf /etc/nginx/nginx.conf

run ls

COPY /dist/* /usr/share/nginx/html/

### STAGE 2: Setup ###
#FROM nginx:latest

#CMD [ "npm", "start" ]

## Copy our default nginx config
#COPY nginx/default.conf /etc/nginx/conf.d/
#COPY nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
#COPY --from=builder /fullsd/dist/* /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]