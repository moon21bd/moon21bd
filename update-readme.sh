#!/usr/bin/env bash
# Commits and pushes whatever is currently in this folder (README.md,
# .github/workflows/snake.yml, etc). Edit the files directly, then run this.
# Run from anywhere:  bash update-readme.sh
set -euo pipefail

DIR="$HOME/Development/application/projects/PORTFOLIO/moon21bd-profile-readme"
cd "$DIR"

git add -A
git commit -q -m "Update profile README" || { echo "nothing changed"; exit 0; }
git branch -M main
git remote get-url origin >/dev/null 2>&1 || \
  gh repo create moon21bd/moon21bd --public --source=. --remote=origin
git push -u origin main
echo "✓ pushed — check https://github.com/moon21bd"
echo ""
echo "One-time only: enable the snake workflow —"
echo "  1. https://github.com/moon21bd/moon21bd/settings/actions -> Workflow permissions -> Read and write permissions -> Save"
echo "  2. https://github.com/moon21bd/moon21bd/actions -> 'generate snake animation' -> Run workflow"
echo "  (takes ~1 min to create the 'output' branch the README points to)"
