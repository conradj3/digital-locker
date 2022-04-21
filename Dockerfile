FROM node:18-alpine3.15 as build-step
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
RUN yarn build

FROM nginx:1.21.6-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 80
