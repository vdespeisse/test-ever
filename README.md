# Vue Base
## Description
### Goal
Somewhat minimal base vue project to save time when starting a new project
### Modules
 - axios (http requests)
 - sugar (extends js prototypes)
 - pug (pug/jade html language)
 - vue-router
 - vuefire (firebase support)

## Project setup
```
git clone git@github.com:vdespeisse/vue-base.git [[PROJECTNAME]]
cd [[PROJECTNAME]]
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Build in single file and pushes to gh-pages branch
```
./deploy.sh
```

### Lints and fixes files
```
npm run lint
```

## TODO
- Don't install vuefire if firebase not needed
- Make modules optional (prompt on install)
