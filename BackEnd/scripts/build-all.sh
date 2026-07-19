#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(dirname "$SCRIPT_DIR")"

cd "$BASE_DIR" || exit 1

echo "🔨 Construyendo todos los microservicios..."

services=("api-gateway" "user-service" "product-service" "notification-service")

for service in "${services[@]}"; do
    echo "📦 Construyendo $service..."
    
    cd "$BASE_DIR/microservices/$service"
    
    if [ -f "package.json" ]; then
        npm install --legacy-peer-deps
        npm run build
        echo "✅ $service construido exitosamente"
    else
        echo "❌ No se encontró package.json en $service"
    fi
done

cd "$BASE_DIR" || exit 1

echo "🎉 Construcción completada para todos los servicios!"
