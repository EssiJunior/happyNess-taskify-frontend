FROM node:alpine

WORKDIR /happyness-taskify-frontend

COPY public/ /happyness-taskify-frontend/public
COPY src/ /happyness-taskify-frontend/src
COPY package.json /happyness-taskify-frontend/

RUN npm install -g npm@latest
RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]