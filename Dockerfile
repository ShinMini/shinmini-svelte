# STEP 1
FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN pnpm
RUN pnpm build

FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
CMD ["pnpm","start:prod"]
