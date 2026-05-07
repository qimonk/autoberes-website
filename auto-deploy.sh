#!/bin/bash
# =============================================================================
# AutoBeres Website - Auto Deploy Script
# =============================================================================
# Usage: bash auto-deploy.sh "optional commit message"
#
# Automatically: git add . → git commit → git push origin main → trigger CF deploy
#
# Requires environment variables:
#   CLOUDFLARE_API_TOKEN - Cloudflare API token
#   CLOUDFLARE_ACCOUNT_ID - Cloudflare account ID
#
# Or set them in .env.local (not committed to git)
# =============================================================================

set -e

REPO_DIR="/home/z/my-project/autoberes-website"
BRANCH="main"
CF_PROJECT="autoberes-website"
PATH="/home/z/.local/bin:$PATH"

cd "$REPO_DIR"

# Load .env.local if exists
[ -f .env.local ] && set -a && source .env.local && set +a

# Pull latest
git pull origin "$BRANCH" 2>/dev/null || true

# Add all
git add .

# Check if there are changes
if git diff --cached --quiet 2>/dev/null && [ -z "$(git diff --cached --name-only 2>/dev/null)" ]; then
  echo "ℹ️  No changes to commit."
  exit 0
fi

# Commit
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
MSG="${1:-auto: update [$TIMESTAMP]}"
git commit -m "$MSG"

# Push
git push origin "$BRANCH"
echo "✅ Pushed to GitHub: $MSG"

# Cloudflare Pages will auto-deploy from GitHub integration
# If direct deploy is needed, uncomment below:
# bun run build
# CLOUDFLARE_API_TOKEN="$CF_API_TOKEN" CLOUDFLARE_ACCOUNT_ID="$CF_ACCOUNT_ID" \
#   npx wrangler pages deploy out --project-name=$CF_PROJECT --branch=$BRANCH

echo "🚀 Cloudflare Pages auto-deploy triggered via GitHub integration"
echo "🌐 Live at: https://autoberes-website.pages.dev/"
