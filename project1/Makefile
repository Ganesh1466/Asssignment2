.PHONY: help docker-build docker-run docker-stop docker-clean docker-logs docker-shell docker-test docker-compose-up docker-compose-down docker-push docker-inspect

IMAGE_NAME ?= project1
IMAGE_TAG ?= latest
REGISTRY ?= 

help:
	@echo "Production Docker Commands"
	@echo "=========================="
	@echo ""
	@echo "Build & Run:"
	@echo "  make docker-build         - Build Docker image"
	@echo "  make docker-run           - Run Docker container"
	@echo "  make docker-stop          - Stop Docker container"
	@echo "  make docker-clean         - Remove Docker container and image"
	@echo ""
	@echo "Development:"
	@echo "  make docker-logs          - View container logs"
	@echo "  make docker-shell         - Shell into running container"
	@echo "  make docker-inspect       - Inspect image and container"
	@echo "  make docker-test          - Run validation tests"
	@echo ""
	@echo "Docker Compose:"
	@echo "  make docker-compose-up    - Start with docker-compose"
	@echo "  make docker-compose-down  - Stop docker-compose"
	@echo ""
	@echo "Registry:"
	@echo "  make docker-push          - Push image to registry"
	@echo ""
	@echo "Options:"
	@echo "  IMAGE_TAG=v1.0.0          - Set image tag (default: latest)"
	@echo "  REGISTRY=myregistry.com   - Set registry URL"
	@echo ""

docker-build:
	@echo "Building Docker image: $(IMAGE_NAME):$(IMAGE_TAG)"
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .
	@echo "✓ Build complete"
	@echo "Image size:"
	@docker images $(IMAGE_NAME):$(IMAGE_TAG) --format "  {{.Size}}"

docker-run:
	@echo "Starting Docker container..."
	docker run -d \
		--name $(IMAGE_NAME)-app \
		-p 3000:3000 \
		$(IMAGE_NAME):$(IMAGE_TAG)
	@echo "✓ Container started"
	@echo "App URL: http://localhost:3000"

docker-stop:
	@echo "Stopping Docker container..."
	docker stop $(IMAGE_NAME)-app
	@echo "✓ Container stopped"

docker-clean: docker-stop
	@echo "Removing container and image..."
	docker rm $(IMAGE_NAME)-app
	docker rmi $(IMAGE_NAME):$(IMAGE_TAG)
	@echo "✓ Cleanup complete"

docker-logs:
	docker logs -f $(IMAGE_NAME)-app

docker-shell:
	docker exec -it $(IMAGE_NAME)-app /bin/sh

docker-inspect:
	@echo "Image information:"
	@docker inspect $(IMAGE_NAME):$(IMAGE_TAG) | grep -E '"Id"|"Created"|"Size"'
	@echo ""
	@echo "Image layers:"
	@docker history $(IMAGE_NAME):$(IMAGE_TAG)
	@echo ""
	@echo "Container status:"
	@docker ps -f name=$(IMAGE_NAME)-app --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

docker-test:
	@echo "Running Docker tests..."
	chmod +x test-docker.sh
	./test-docker.sh

docker-compose-up:
	@echo "Starting with Docker Compose..."
	docker-compose up -d
	@echo "✓ Services started"
	@docker-compose ps

docker-compose-down:
	@echo "Stopping Docker Compose services..."
	docker-compose down
	@echo "✓ Services stopped"

docker-push:
	@if [ -z "$(REGISTRY)" ]; then \
		echo "Error: REGISTRY not set"; \
		echo "Usage: make docker-push REGISTRY=myregistry.com"; \
		exit 1; \
	fi
	@echo "Tagging image for registry..."
	docker tag $(IMAGE_NAME):$(IMAGE_TAG) $(REGISTRY)/$(IMAGE_NAME):$(IMAGE_TAG)
	@echo "Pushing to registry..."
	docker push $(REGISTRY)/$(IMAGE_NAME):$(IMAGE_TAG)
	@echo "✓ Push complete"
	@echo "Image: $(REGISTRY)/$(IMAGE_NAME):$(IMAGE_TAG)"
