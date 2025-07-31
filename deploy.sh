#!/bin/bash

# S2 Overseas - GitHub Pages Deployment Script
# This script builds and deploys the website to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci
if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed"
    exit 1
fi

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy
if [ $? -ne 0 ]; then
    echo "❌ Error: Deployment failed"
    exit 1
fi

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://[your-username].github.io/aqua-code-grabber-main/"
echo "⏰ It may take a few minutes for changes to appear." 