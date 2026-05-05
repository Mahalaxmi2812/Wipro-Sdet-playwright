

MESSAGE=${1:-"Auto-commit from script"}

echo "Syncing branch"


git add .
git commit -m "$MESSAGE"


git push origin main

echo "Done! Pushed to main using your terminal env."
