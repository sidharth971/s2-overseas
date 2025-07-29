# 🚀 Deployment Guide - GitHub Pages

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages
1. Go to your repository: `https://github.com/sidharth971/aqua-code-grabber-main`
2. Click **Settings** tab
3. Scroll down to **Pages** (in left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/(root)** folder
6. Click **Save**

### Step 2: Build and Deploy
1. The GitHub Actions workflow will automatically build your project
2. Download the build artifacts from the Actions tab
3. Extract the `dist` folder contents to your repository root
4. Commit and push the files

### Step 3: Your Site is Live!
- **URL**: `https://sidharth971.github.io/aqua-code-grabber-main/`
- **Automatic**: Every push to main branch will rebuild and deploy

## Alternative: Manual Deployment

If the automatic deployment doesn't work, you can deploy manually:

### Option 1: Using GitHub CLI
```bash
# Install GitHub CLI
npm install -g gh

# Login to GitHub
gh auth login

# Enable Pages
gh repo edit --enable-pages

# Deploy
gh pages deploy dist --branch main
```

### Option 2: Using gh-pages package
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## Troubleshooting

### If Pages doesn't appear:
1. Make sure repository is **Public**
2. Check that **Pages** is enabled in Settings
3. Wait 5-10 minutes for first deployment
4. Check the **Actions** tab for build status

### If build fails:
1. Check the Actions tab for error details
2. Make sure all dependencies are in package.json
3. Verify the build works locally: `npm run build`

## Support
- GitHub Pages Documentation: https://pages.github.com/
- GitHub Actions Documentation: https://docs.github.com/en/actions 