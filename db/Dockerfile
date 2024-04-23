FROM --platform=${TARGETPLATFORM} node:18-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install --ignore-scripts -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --ignore-scripts
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]
