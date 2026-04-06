# Project 1 - React Application with Docker

## 🚀 Project Overview

This is a fully responsive React application with a production-ready Docker setup. The application features:

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern Stack**: React 19.2.4 with Vite 8.0.1 and Tailwind CSS 4.2.2
- **Production Ready**: Multi-stage Docker build with Nginx serving
- **Security**: Security headers, gzip compression, and optimized configuration

## 📁 Project Structure

```
project1/
├── src/
│   ├── Components/
│   │   ├── About.jsx          # About section with custom styling
│   │   ├── AvatarGroup.jsx    # Avatar display component
│   │   ├── Footer.jsx         # Responsive footer
│   │   ├── Hero.jsx           # Landing section
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Services.jsx       # Services showcase
│   │   └── Testimonialpage.jsx # Testimonials section
│   ├── App.jsx                # Main application component
│   ├── index.css              # Global styles with Tailwind
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── Dockerfile                 # Multi-stage production build
├── nginx.conf                 # Nginx production configuration
├── docker-compose.yml         # Container orchestration
├── .dockerignore              # Docker build exclusions
├── test-docker.sh             # Docker validation script
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # This file
```

## 🐳 Docker Setup

### Prerequisites

1. **Docker Desktop** installed and running
   - Download from: https://www.docker.com/products/docker-desktop
   - Start Docker Desktop before testing

2. **Node.js** (for local development)
   - Version 18+ recommended

### Quick Start with Docker

1. **Start Docker Desktop** (if not already running)

2. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Or build and run manually:**
   ```bash
   # Build the image
   docker build -t project1:latest .

   # Run the container
   docker run -d -p 3000:3000 --name project1-app project1:latest
   ```

4. **Access the application:**
   - Open http://localhost:3000 in your browser

### Testing the Docker Setup

Run the comprehensive validation script:

```bash
# On Windows PowerShell (run as Administrator if needed)
.\test-docker.sh

# Or manually:
# 1. Check Docker is running
docker info

# 2. Build image
docker build -t project1:test .

# 3. Run container
docker run -d -p 3000:3000 --name project1-test project1:test

# 4. Test connectivity
curl http://localhost:3000

# 5. Clean up
docker stop project1-test
docker rm project1-test
```

### Production Deployment

1. **Build production image:**
   ```bash
   docker build -t myregistry/project1:v1.0.0 .
   ```

2. **Push to registry:**
   ```bash
   docker push myregistry/project1:v1.0.0
   ```

3. **Deploy:**
   ```bash
   docker run -d -p 80:3000 --name project1-prod myregistry/project1:v1.0.0
   ```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Production Features

### Docker Configuration
- **Multi-stage build**: Node.js for build, Nginx Alpine for runtime
- **Optimized image size**: ~50MB final image
- **Security**: Non-root user, security headers
- **Performance**: Gzip compression, caching headers
- **Health checks**: Container health monitoring
- **SPA routing**: Proper client-side routing support

### Application Features
- **Fully responsive**: Works on mobile, tablet, and desktop
- **Modern UI**: Clean design with Tailwind CSS
- **Fast loading**: Optimized Vite build
- **SEO ready**: Proper meta tags and structure

## 🔧 Configuration Files

### Dockerfile
```dockerfile
# Multi-stage build with Node.js and Nginx
FROM node:20-alpine AS build
# ... build steps

FROM nginx:alpine
# ... production serving
```

### nginx.conf
- SPA routing configuration
- Security headers
- Gzip compression
- Health check endpoint

### docker-compose.yml
- Service orchestration
- Port mapping
- Environment variables
- Restart policies

## 🧪 Testing Checklist

Before submission, ensure:

- [ ] Docker Desktop is running
- [ ] `docker build -t project1:test .` succeeds
- [ ] `docker run -d -p 3000:3000 project1:test` starts container
- [ ] http://localhost:3000 loads the application
- [ ] Application is fully responsive on mobile/tablet
- [ ] No console errors in browser
- [ ] All components render correctly

## 🚀 Deployment Options

### Option 1: Docker Compose (Recommended)
```bash
docker-compose up -d
```

### Option 2: Docker Run
```bash
docker run -d -p 3000:3000 project1:latest
```

### Option 3: Kubernetes
```bash
kubectl apply -f k8s-deployment.yaml
```

## 📞 Support

If you encounter issues:

1. **Docker not running**: Start Docker Desktop
2. **Build fails**: Check Node.js version and dependencies
3. **Port conflicts**: Change port mapping (e.g., `-p 3001:3000`)
4. **Permission issues**: Run commands as administrator

## 📝 Notes

- The application is production-ready with proper error handling
- All responsive design changes maintain the original design aesthetic
- Docker setup includes security best practices
- The build is optimized for small image size and fast startup

---

**Ready for submission!** 🎉
