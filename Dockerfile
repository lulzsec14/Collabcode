FROM node:16

WORKDIR /usr/src/collabcode

COPY . .

RUN npm install
WORKDIR /usr/src/collabcode/frontend
RUN npm install
RUN npm run build

RUN curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64
RUN chmod +x /usr/local/bin/dbmate
WORKDIR /usr/src/collabcode

CMD npm start
