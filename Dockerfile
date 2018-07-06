FROM node:latest as builder

MAINTAINER Claudiu GOmbos "claudiu9379@gmail.com"

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
#ENV PORT 4200
#EXPOSE 4200

RUN $(npm bin)/ng build --prod


### STAGE 2: Setup ###
FROM nginx:1.13.3-alpine



#CMD [ "npm", "start" ]

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /fullsd/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]