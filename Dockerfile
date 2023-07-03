FROM nexus.infra.rbc.ru/base/node:v16.9.1-5 AS deps
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY .npmrc ./
ENV NODE_ENV production
RUN npm set-script prepare ""
RUN npm ci

FROM nexus.infra.rbc.ru/base/node:v16.9.1-5 AS builder
WORKDIR /app
COPY ./src .
COPY --from=deps /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED 1
ENV BASE_PATH ""
RUN npm run build

FROM nexus.infra.rbc.ru/base/node:v16.9.1-5 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN groupadd -g 1001 -r nodejs
RUN useradd -r nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]

ENTRYPOINT [""]
