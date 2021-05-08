file=$([ -z "$1" ] && echo ".env" || echo ".env.$1")

if [ -f $file ]; then
set -a
source $file
set +a
else
echo "No $file file found" 1>&2
return 1
fi

echo "Starting BT app deployment to $1..."
npm run build
netlify deploy --prod --site $NETLIFY_SITE_API_ID


# Roadmap
# Add parameter for if build required



