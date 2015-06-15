# AngularComponentsPOC
A proof of concept for creating and distributing re-usable Angular directives

This repo contains two Angular apps (`app` and `docs`), and an Angular module (`directives`). 
All directives are created in the directives module/s, and can be used in the apps. 

## Creating a new directive

cd into the `directives` folder

**Create a directive with yeoman:**

	yo angular:directive helloPerson

Yeoman will:

   create app/scripts/directives/helloperson.js
   create test/spec/directives/helloperson.js

**Add your directive to `main` in bower.json for the directives project**

```
"main": [
    "app/scripts/app.js"    
    "app/scripts/directives/hello.js"    
    "app/scripts/directives/helloPerson.js"
    ...
  ],
```

That's it. 

## Using a directive in an app

Simply add the directivesApp module to your project. In bower.json: 

```
...
"dependencies": {
	...
	"directivesApp": "./../directives"
}
...
```

Insall with `bower install`. 

**Add to requirements for you module (you only need to do this once)**


**app/app.js:**

```
angular
  .module('app1App', [
    'ngAnimate',
    ...
    'directivesApp'
  ])
  .config(function ($routeProvider) {
  ...
```

## TODO/Notes: 

* Directives should actually ideally be one/module (e.g.: instead of having all directives in directivesApp, they should actually each be in their own module)
* Test what happens when we throw partials at the problem. 