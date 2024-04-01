From node:20
WORKDIR /Downloads/nest-crud-api-project/
COPY . .
RUN yarn install
RUN yarn run build
EXPOSE 3000
CMD ["yarn","start:dev"]