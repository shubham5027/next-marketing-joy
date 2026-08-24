# --- build stage ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json bun.lock* package-lock.json* ./
RUN npm install

COPY . .
# Tell Nitro to build a standalone Node.js server
ENV NITRO_PRESET=node-server 
RUN npm run build

# --- runtime stage ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

COPY --from=builder /app/.output ./.output

EXPOSE 3001
CMD ["node", ".output/server/index.mjs"]