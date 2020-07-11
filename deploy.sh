#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f "https://github.com/sparrow-js/sparrow-vue-site.git" master:gh-pages

cd -