FROM node:alpine
WORKDIR /app
COPY ./package.json .
COPY ./tsconfig.json .

RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 8080

CMD [ "npm","start" ]