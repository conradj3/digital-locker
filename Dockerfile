FROM node:16-alpine3.15 as build-step
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.20.2-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 80
