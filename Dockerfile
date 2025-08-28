FROM mhart/alpine-node:14.17.3 As development

WORKDIR /usr/src/app

ARG NPM_TOKEN

COPY .npmrc .npmrc
COPY package*.json ./

RUN npm install && \
    rm -f .npmrc
COPY . .

RUN npm run build

FROM mhart/alpine-node:14.17.3 as production

ARG NPM_TOKEN

RUN addgroup kpn && \
    adduser \
    --disabled-password \
    --gecos "" \
    --no-create-home \
    -G kpn  \
    kpn

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY .npmrc .npmrc
COPY package*.json ./

RUN npm install && \
    rm -f .npmrc

COPY --from=development /usr/src/app/dist/ ./dist

USER kpn

CMD ["node", "dist/main"] 
