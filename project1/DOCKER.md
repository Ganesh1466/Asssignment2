# Production-Ready Docker Setup for React.js

## Overview
This setup provides a **multi-stage production-optimized Docker configuration** for your React.js frontend application using Vite, Node.js, and Nginx.

## Architecture

### Stage 1: Builder (Node Alpine)
- Lightweight Node 20 Alpine image
- Installs dependencies with `npm ci` (deterministic)
- Builds React app with Vite
- Creates optimized production bundle
- **Discarded in final image**

### Stage 2: Runtime (Nginx Alpine)
- Lightweight Nginx Alpine server
- Serves pre-built static files
- Configured for Single Page Application (SPA)
- Security hardening
- Health checks enabled
- Exposes port 3000

## Files Included

1. **Dockerfile** - Multi-stage production build
2. **.dockerignore** - Optimized exclusions (reduces build context)
3. **nginx.conf** - Production Nginx configuration
4. **docker-compose.yml** - Easy orchestration
5. **DOCKER.md** - Usage guide

## Key Optimizations

### Build Size
- Alpine images: ~150MB (vs ~900MB+ with full OS)
- Multi-stage: Final image excludes build dependencies
- Final image size: ~30-50MB

### Performance
- Layer caching: Dependencies cached separately
- Gzip compression enabled
- Asset minification (via Vite)
- Strategic caching headers

### Security
- Non-root user (Nginx default)
- Security headers configured
- No build artifacts in runtime
- Read-only filesystem (except Nginx temp dirs)

### Best Practices
- ✅ Specific version pins (Node 20, Nginx, Alpine)
- ✅ `npm ci` for reproducible builds
- ✅ `dumb-init` for proper signal handling
- ✅ Health checks for container orchestration
- ✅ SPA routing configuration
- ✅ Proper cache control headers
- ✅ Error page handling

## Quick Start

### Build Image
```bash
docker build -t project1:latest .
```

### Run Container
```bash
docker run -d \
  --name project1-app \
  -p 3000:3000 \
  project1:latest
```

### Using Docker Compose (Recommended)
```bash
docker-compose up -d
```

### Verify Running
```bash
curl http://localhost:3000
docker logs project1-app
```

## Advanced Usage

### Build with Custom Tag
```bash
docker build -t myregistry.azurecr.io/project1:v1.0.0 .
```

### Push to Registry
```bash
docker push myregistry.azurecr.io/project1:v1.0.0
```

### Run with Volume Mount (Development)
```bash
docker run -d \
  --name project1-app \
  -p 3000:3000 \
  -v /path/to/src:/usr/share/nginx/html \
  project1:latest
```

### Check Image Size
```bash
docker images project1
```

### View Build Layers
```bash
docker history project1:latest
```

### Run in Production with Limits
```bash
docker run -d \
  --name project1-app \
  --cpus="1" \
  --memory="512m" \
  --memory-swap="512m" \
  -p 3000:3000 \
  project1:latest
```

## Configuration

### Nginx Port
- **Default:** 3000
- **Change:** Edit `nginx.conf` (listen 3000) and docker-compose

### Environment Variables
- **NODE_ENV:** Set to 'production' in docker-compose.yml
- Add more variables in docker-compose.yml `environment` section

### Logging
```bash
# View logs
docker logs project1-app

# Follow logs
docker logs -f project1-app
```

## Health Check

The container includes a health check endpoint:
```bash
docker ps  # Shows (healthy) or (unhealthy)
```

To customize, edit the HEALTHCHECK in Dockerfile.

## Troubleshooting

### Container won't start
```bash
docker logs project1-app
docker inspect project1-app
```

### Port already in use
```bash
# Use different port
docker run -p 8080:3000 project1:latest
```

### Build fails
```bash
# Rebuild without cache
docker build --no-cache -t project1:latest .
```

### Permission issues
```bash
# Check Nginx user permissions
docker exec project1-app ls -la /usr/share/nginx/html
```

## Production Checklist

- [x] Multi-stage build configured
- [x] Alpine images for small size
- [x] Security headers enabled
- [x] Health checks configured
- [x] Caching optimized
- [x] Gzip compression enabled
- [x] SPA routing configured
- [x] Environment variables ready
- [x] Non-root execution
- [x] Signal handling with dumb-init

## Kubernetes Deployment

For Kubernetes, use image registry version:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: project1
spec:
  replicas: 3
  selector:
    matchLabels:
      app: project1
  template:
    metadata:
      labels:
        app: project1
    spec:
      containers:
      - name: app
        image: myregistry.azurecr.io/project1:v1.0.0
        ports:
        - containerPort: 3000
        livenessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 10
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
        resources:
          requests:
            cpu: 100m
            memory: 128Mi
          limits:
            cpu: 500m
            memory: 512Mi
```

## Performance Metrics

Typical production setup:
- **Build time:** 2-3 minutes (first build), <1 minute (cached)
- **Final image:** 30-50MB
- **Startup time:** <2 seconds
- **Memory usage:** 50-150MB per instance
- **CPU usage:** Minimal (nginx is lightweight)

## Support & Updates

For updates:
1. Update Node version in Dockerfile: `FROM node:21-alpine`
2. Update Nginx: `FROM nginx:latest` (or specific version)
3. Rebuild: `docker build --no-cache -t project1:latest .`

---

**Production Deployment:** This setup is ready for Kubernetes, Docker Swarm, or any container orchestration platform. Ensure you use image registries (Docker Hub, ECR, ACR, GCR) for consistent deployments.
