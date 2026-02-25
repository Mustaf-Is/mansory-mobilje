# GitHub Deployment Guide for Mansory Mobilje

## ✅ Pre-Deployment Checklist

Your `.gitignore` file is properly configured and will automatically exclude:
- ✅ `node_modules/` - Dependencies (will be installed via npm)
- ✅ `dist/` - Build output (generated during build)
- ✅ `.env.local` - Environment variables (contains API keys)
- ✅ `*.log` files - Log files
- ✅ Editor files - `.vscode/`, `.idea/`, etc.
- ✅ OS files - `.DS_Store`, `Thumbs.db`, etc.

### Files That WILL Be Committed (Safe):
- ✅ All source code (`.tsx`, `.ts`, `.css`, `.html`)
- ✅ `package.json` and `package-lock.json`
- ✅ `.env.example` (template without real API keys)
- ✅ Configuration files (`tsconfig.json`, `vite.config.ts`)
- ✅ Assets (images, logos)
- ✅ Documentation (`README.md`)

### Files That WON'T Be Committed (Protected):
- ❌ `.env.local` - Contains your actual API key
- ❌ `node_modules/` - Too large, will be reinstalled
- ❌ `dist/` - Build output, will be regenerated

## 🚀 Step-by-Step GitHub Deployment

### 1. Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Verify .gitignore is working
git status
# You should NOT see node_modules, dist, or .env.local in the list
```

### 2. Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click "New Repository" or go to https://github.com/new
3. Fill in repository details:
   - **Repository name**: `mansory-mobilje`
   - **Description**: "Custom furniture website with interactive portfolio"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (you already have one)
4. Click "Create repository"

### 3. Connect Local Repository to GitHub

GitHub will show you commands. Use these:

```bash
# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit: Mansory Mobilje custom furniture website"

# Connect to GitHub repository (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/mansory-mobilje.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Verify Upload

1. Refresh your GitHub repository page
2. Verify these are present:
   - ✅ `components/` folder
   - ✅ `assets/` folder
   - ✅ `README.md`
   - ✅ `package.json`
3. Verify these are NOT present:
   - ❌ `node_modules/`
   - ❌ `dist/`
   - ❌ `.env.local`

## 🌐 Deploy to Hosting Platform

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your `mansory-mobilje` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add environment variable (if needed):
   - Key: `GEMINI_API_KEY`
   - Value: Your actual API key
7. Click "Deploy"

Your site will be live at: `https://mansory-mobilje.vercel.app`

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select `mansory-mobilje`
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variable (if needed):
   - Key: `GEMINI_API_KEY`
   - Value: Your actual API key
7. Click "Deploy"

Your site will be live at: `https://mansory-mobilje.netlify.app`

### Option 3: GitHub Pages

1. Update `vite.config.ts` to add base path:
   ```typescript
   export default defineConfig({
     base: '/mansory-mobilje/',
     plugins: [react()],
   })
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Click Save

Your site will be live at: `https://USERNAME.github.io/mansory-mobilje`

## 🔄 Making Updates

After making changes:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "Add new project images and descriptions"

# Push to GitHub
git push

# Your hosting platform will auto-deploy the changes
```

## 🔐 Security Notes

1. **Never commit `.env.local`** - Already protected by `.gitignore`
2. **API Keys** - Add them in hosting platform's environment variables
3. **Sensitive Data** - Keep all credentials out of source code
4. **`.env.example`** - Safe to commit, contains no real values

## 📋 Common Issues

### Issue: `.env.local` appears in git status
**Solution**: 
```bash
git rm --cached .env.local
git commit -m "Remove .env.local from repository"
```

### Issue: Repository is too large
**Solution**: 
```bash
# Make sure node_modules is ignored
echo "node_modules/" >> .gitignore
git rm -r --cached node_modules
git commit -m "Remove node_modules from repository"
```

### Issue: Build fails on hosting platform
**Solution**: Check that `package.json` has correct build script:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

## ✅ Final Checklist

Before deploying:
- [ ] `.gitignore` is properly configured
- [ ] No `.env.local` in repository
- [ ] README.md is updated
- [ ] All assets are included
- [ ] Build works locally (`npm run build`)
- [ ] Repository is public/private as intended
- [ ] Contact information is correct
- [ ] All dependencies are in `package.json`

---

Need help? Check the documentation or create an issue on GitHub!
