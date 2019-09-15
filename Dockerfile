FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
ARG UselessArg=unknown
COPY ["package.json", "package-lock.json*", "next.config.js", "server.js", "./"]
RUN npm install --production --save -g && mv node_modules ../
COPY . .
EXPOSE 3000
CMD nodemon server.js