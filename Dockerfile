FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
