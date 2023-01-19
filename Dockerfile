FROM alpine

RUN apk add --no-cache rust cargo
RUN apk add --update npm

WORKDIR /app
COPY . .

ARG PORT

RUN npm i
RUN npm run build:client 
RUN npm run build:server

EXPOSE $PORT
ENTRYPOINT ["./backend_server/target/release/backend_server"]
