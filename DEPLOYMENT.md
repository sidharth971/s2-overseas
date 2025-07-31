# Deployment Guide - GitHub Pages

This guide explains how to deploy the S2 Overseas website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Repository**: This project should be in a GitHub repository
3. **Node.js**: Version 18 or higher installed locally

## Deployment Methods

### Method 1: Manual Deployment (Recommended for testing)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

### Method 2: Automated Deployment (Recommended for production)

The project includes a GitHub Actions workflow that automatically deploys when you push to the main branch.

1. **Push your changes to the main branch**:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **The deployment will happen automatically** via the GitHub Actions workflow.

## GitHub Pages Configuration

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/(root)** folder
5. Click **Save**

### Repository Settings

Make sure your repository has the following settings:

- **Repository name**: `aqua-code-grabber-main` (or update the base path in `vite.config.ts`)
- **Visibility**: Public (required for GitHub Pages)

## Configuration Files

### vite.config.ts
The base path is configured for GitHub Pages:
```typescript
base: mode === 'production' ? '/aqua-code-grabber-main/' : './'
```

### package.json
Deployment scripts are included:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist",
    "deploy:prod": "npm run build && gh-pages -d dist"
  }
}
```

### .github/workflows/deploy.yml
Automated deployment workflow that triggers on pushes to main branch.

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure the base path in `vite.config.ts` matches your repository name
2. **Build Failures**: Check that all dependencies are installed and Node.js version is 18+
3. **Deployment Not Working**: Verify that GitHub Pages is enabled in repository settings

### Manual Deployment Steps

If automated deployment fails:

1. **Clean and reinstall**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Build and deploy manually**:
   ```bash
   npm run build
   npm run deploy
   ```

3. **Check GitHub Actions**: Go to Actions tab in your repository to see deployment logs

## Accessing Your Deployed Site

Once deployed, your site will be available at:
`https://[your-username].github.io/aqua-code-grabber-main/`

## Development vs Production

- **Development**: Uses relative paths (`./`)
- **Production**: Uses repository-specific paths (`/aqua-code-grabber-main/`)

This ensures the site works both locally and when deployed to GitHub Pages.

## Security Notes

- The `GITHUB_TOKEN` is automatically provided by GitHub Actions
- No additional secrets are required for basic deployment
- The workflow only deploys from the main branch to prevent unauthorized deployments 