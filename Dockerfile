FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3002
EXPOSE 8080

CMD [ "npm", "run", "dev", "dev-all" ]