# Stage 1: Build
FROM node:20-alpine AS builder

# Instalamos pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copiamos archivos de configuración de pnpm y dependencias
COPY pnpm-lock.yaml package.json ./

# Instalamos todas las dependencias (incluyendo devDeps para el build)
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código y construimos
COPY . .
RUN pnpm run build

# Stage 2: Runtime (Imagen final ligera)
FROM node:20-alpine

RUN npm install -g pnpm
WORKDIR /app

# Copiamos solo lo necesario desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Comando para producción
CMD ["pnpm", "run", "start:prod"]
