FROM node:20-alpine as builder

ENV NODE_ENV build

USER node

# WORKDIR /home/node/core
# COPY core/*.json ./
# RUN npm ci

WORKDIR /home/node/api-portfolio

COPY api-portfolio/*.json ./
RUN npm ci

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/api-portfolio
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit=dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/api-portfolio/package*.json ./
COPY --from=builder --chown=node:node /home/node/api-portfolio/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/api-portfolio/dist/ ./dist/
COPY --from=builder --chown=node:node /home/node/api-portfolio/prisma/ ./prisma/

CMD ["node", "dist/api-portfolio/src/main.js"]