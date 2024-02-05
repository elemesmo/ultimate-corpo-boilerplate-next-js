# DEPS
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package*.json .npmrc ./

RUN npm ci

# BUILDER | depends on NEXT_PUBLIC_ variables for the build
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY  . .

# use your dev env api url here to build the image for the env
# ex: http://dev.example.com/api / leave localhost for build image locally
ENV NEXT_PUBLIC_NEXT_API_URL http://localhost:3000/api
# NEXT_PUBLIC_USER_NONCE needs to be the same from environment variables
# probably set from a key vault or secrets manager for this environment used in the pipeline
ENV NEXT_PUBLIC_USER_NONCE=3dc657c034bc85d6063584fc6ea28ca7
ENV NEXT_PUBLIC_ENV development

RUN npm run build

# RUNNER
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
