#!/bin/bash

# Build the React app
echo "Building the React app..."
npm run build

# Create a new branch for GitHub Pages
echo "Creating gh-pages branch..."
git checkout -b gh-pages

# Remove all files except build folder
echo "Cleaning up files..."
git rm -rf .
git checkout HEAD -- build/

# Move build contents to root
echo "Moving build contents to root..."
mv build/* .
rmdir build

# Add all files
echo "Adding files to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push origin gh-pages --force

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

# Delete local gh-pages branch
echo "Cleaning up local gh-pages branch..."
git branch -D gh-pages

echo "Deployment complete! Your site should be available at: https://ayushgithub16.github.io/PortfolioWebsite" 