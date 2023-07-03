# BASE_IMAGE_TAG - используется для подстановки в workflow

FROM nexus.infra.rbc.ru/frontend/rbc-news-base:BASE_IMAGE_TAG AS builder
WORKDIR /app
COPY ./src .
ENV NEXT_TELEMETRY_DISABLED 1
ARG BASE_PATH ""
RUN npm run build

FROM nexus.infra.rbc.ru/frontend/rbc-news-base:BASE_IMAGE_TAG AS runner
WORKDIR /app

ENV NODE_ENV production

RUN groupadd -g 1001 -r nodejs
RUN useradd -r nextjs -u 1001 -m

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]

ENTRYPOINT [""]
