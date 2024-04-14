# Development stage
FROM --platform=${BUILDPLATFORM} node:20-alpine AS development
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i --ignore-scripts && npm cache clean --force

COPY . ./
RUN npm run build

# Production stage
FROM --platform=${TARGETPLATFORM} node:20-alpine AS production
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i --production --ignore-scripts && npm cache clean --force

COPY --from=development /app/dist ./dist

CMD [ "npm", "run", "start" ]
