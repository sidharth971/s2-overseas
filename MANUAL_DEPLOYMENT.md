# Manual Deployment Guide

Since the GitHub Actions deployment is having issues, here's how to deploy manually:

## Option 1: Using the deployment script

```bash
# Make sure you're in the project directory
cd /path/to/aqua-code-grabber-main

# Run the deployment script
./deploy.sh
```

## Option 2: Manual deployment steps

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to GitHub Pages
npm run deploy
```

## Option 3: Using GitHub CLI

```bash
# Install GitHub CLI if not installed
# sudo apt install gh (Ubuntu/Debian)
# brew install gh (macOS)

# Login to GitHub
gh auth login

# Deploy to GitHub Pages
gh pages deploy dist --branch gh-pages
```

## Option 4: Direct file upload

1. Run `npm run build` to create the `dist` folder
2. Go to your repository on GitHub
3. Create a new branch called `gh-pages`
4. Upload all files from the `dist` folder to the root of the `gh-pages` branch
5. Go to Settings → Pages
6. Set source to "Deploy from a branch"
7. Select `gh-pages` branch and `/(root)` folder

## Troubleshooting

### If deployment fails:
1. Check that your repository is public
2. Ensure you have write permissions to the repository
3. Try running the deployment locally first: `npm run build && npm run deploy`

### If the site doesn't appear:
1. Wait 5-10 minutes for GitHub Pages to build
2. Check the Actions tab for any error messages
3. Verify the gh-pages branch was created

## Your site URL

Once deployed, your site will be available at:
`https://sidharth971.github.io/aqua-code-grabber-main/` 