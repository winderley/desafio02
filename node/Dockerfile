

FROM node

#WORKDIR /home/app

#RUN mkdir /usr/app2

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#VOLUME [ "/app" ]

COPY ./app/package.json ./

RUN npm install express
RUN npm install nodemon

EXPOSE 3000

##CMD [ "npm", "start" ]
