# # Build Stage
# FROM node:24-alpine AS BUILD_IMAGE
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# # Production Stage
# FROM node:24-alpine AS PRODUCTION_STAGE
# WORKDIR /app
# RUN npm i -g serve@latest
# COPY --from=BUILD_IMAGE /app/out ./out

# ENV NODE_ENV=production
# EXPOSE 3001
# CMD ["serve", "-s", "out", "-l", "3001"]


FROM node:24-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3001
CMD ["npm", "run", "dev"]
