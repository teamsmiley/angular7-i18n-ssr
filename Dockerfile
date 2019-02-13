# stage 1
FROM node:10 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod
EXPOSE 80
CMD [ "node", "local.js" ]
