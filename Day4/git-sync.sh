#!/bin/bash

# Remove the hardcoded TOKEN line. 
# We will get it from the environment instead.
USERNAME="Mahalaxmi2812"
REPO="github.com/Mahalaxmi2812/Wipro-Sdet-playwright.git"

MESSAGE=${1:-"Auto-commit from script"}

echo "Syncing branch..."
git add .
git commit -m "$MESSAGE"

# Use the $TOKEN variable (which we will set in the terminal next)
git push "https://$USERNAME:$TOKEN@$REPO" main

echo "Done!"