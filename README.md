# mi-microservicio-test

Microservicio desplegado automáticamente en `micro1.boogiepop.cloud`

## Configuración de Secrets en GitHub

Para que el pipeline funcione correctamente, asegúrate de configurar los siguientes secrets en la configuración del repositorio:

1. `DOCKERHUB_USERNAME`: Tu nombre de usuario de Docker Hub
2. `DOCKERHUB_TOKEN`: Tu token de acceso de Docker Hub
3. `ORCHESTRATOR_TOKEN`: Token de autenticación para el orquestador

## Despliegue Automático

Cada push a la rama `main` activará:
1. Build de la imagen Docker
2. Push a Docker Hub
3. Despliegue automático en el orquestador

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build
npm run build
```
