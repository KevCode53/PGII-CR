FROM node:18-alpine

RUN npm i -g pnpm

WORKDIR /app/front/

COPY package*.json /app/front/

RUN pnpm install

COPY . /app/front/

EXPOSE 5173
COPY ./entrypoint.sh /

ENTRYPOINT ["sh", "/entrypoint.sh" ]
