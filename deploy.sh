# Commit all changes
npm run build && cd dist && cat index.html | sed "s/\/js/js/g" | sed "s/\/css/css/g" | inliner --nosvg --skip-absolute-urls -mni > inline.html && mv inline.html index.html && rm -rf css js && cd -
git checkout gh-pages && rm -rf img && cd dist && mv * ../ && cd .. && rm -rf dist && git add . && git commit -m "Deploy" && git push && git checkout master
