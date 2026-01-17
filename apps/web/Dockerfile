FROM --platform=$BUILDPLATFORM node:24-alpine AS builder

# Build-time environment variable
ARG Backend_URL
ENV Backend_URL=${Backend_URL}

RUN echo "Backend_URL=$Backend_URL"

# Enable pnpm
RUN corepack enable pnpm
WORKDIR /app

# Copy root package files
COPY package.json pnpm-lock.yaml ./

# Copy web workspace package.json for caching
COPY apps/web/package.json ./apps/web/

# Install dependencies recursively
RUN pnpm install --frozen-lockfile --recursive

# Copy full source
COPY . .

# Build only the web workspace
RUN pnpm build

# --- Production stage ---
FROM node:24-alpine AS runner

WORKDIR /app

ARG Backend_URL
ENV NODE_ENV=production
ENV Backend_URL=${Backend_URL}

# Enable pnpm (optional)
RUN corepack enable pnpm

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextJS -u 1001

# Copy build output from builder
COPY --from=builder --chown=nextJS:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextJS:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextJS:nodejs /app/apps/web/public ./apps/web/public

USER nextJS
EXPOSE 3000

CMD ["node", "apps/web/server.js"]
