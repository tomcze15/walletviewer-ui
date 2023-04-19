FROM node:lts-alpine

WORKDIR /home/node/walletviewer/app
EXPOSE 3001
COPY package*.json .
COPY tsconfig.json .
RUN npm ci
COPY public/ ./public
COPY src/ ./src

CMD ["npm", "start"]
