#!/bin/bash



# only deploy if the branch is main or develop

echo "当前分支：$VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" != "main" ] && [ "$VERCEL_GIT_COMMIT_REF" != "develop" ]; then
  echo "Don't deploy"
  exit 0
else
  echo "Deploy"
  exit 1
fi
