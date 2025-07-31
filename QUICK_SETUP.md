# Quick Setup - GitHub Pages Deployment

## 🚀 One-Click Deployment

### Option 1: Using the deployment script
```bash
./deploy.sh
```

### Option 2: Manual deployment
```bash
npm install
npm run build
npm run deploy
```

## 📋 Prerequisites Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Node.js 18+ installed
- [ ] Repository is public

## ⚙️ GitHub Pages Setup

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **gh-pages** branch and **/(root)** folder
5. Click **Save**

## 🔄 Automated Deployment

The project includes GitHub Actions that automatically deploy when you push to main:

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 🌐 Your Site URL

Once deployed, your site will be available at:
`https://[your-username].github.io/aqua-code-grabber-main/`

## 🛠️ Troubleshooting

- **Build fails**: Check Node.js version (18+ required)
- **404 errors**: Verify repository name matches base path in `vite.config.ts`
- **Deployment not working**: Ensure GitHub Pages is enabled in repository settings

## 📞 Support

- Check the Actions tab in your repository for deployment logs
- Review `DEPLOYMENT.md` for detailed instructions 