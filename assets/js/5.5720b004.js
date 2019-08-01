(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{39:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"usage-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-guide","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage Guide")]),t._v(" "),a("p",[t._v("Vuesora is a one-stop shop custom front-end framework. Vuesora powers the front-end for all of Musora's web applications - Drumeo, Guitareo, Pianote, and Recordeo.")]),t._v(" "),a("p",[t._v("It consists of 2 main modules:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("A complete CSS framework - with a 12 point grid system based off of the flex-box spec. Vuesora is built on an\nhelper class system, with helpers for all sorts of modifiers, from typography, to colors, borders, and dozens of\nstyled components - Vuesora allows views to be built with minimal specific CSS.")])]),t._v(" "),a("li",[a("p",[t._v("A custom Vue Component library. Any of the application's components that require complex DOM manipulation have their\nown custom Vue component.")])])]),t._v(" "),a("h2",{attrs:{id:"local-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-development-environment","aria-hidden":"true"}},[t._v("#")]),t._v(" Local Development Environment")]),t._v(" "),a("p",[t._v("Since Vuesora is a series of modules on NPM, we need to install the modules, import them into our project, and bundle\nthem into our projects code. Follow the steps below to set up your local development environment.")]),t._v(" "),a("p",[t._v("There a few npm scripts available for local development in Vuesora:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("test:e2e")]),t._v(" - Run all End to End Tests")]),t._v(" "),a("li",[a("code",[t._v("test:unit")]),t._v(" - Run all Unit Tests")]),t._v(" "),a("li",[a("code",[t._v("docs:dev")]),t._v(" - Build the docs for local development with a url at localhost")]),t._v(" "),a("li",[a("code",[t._v("docs:build")]),t._v(" - Build the docs for production under the docs directory")]),t._v(" "),a("li",[a("code",[t._v("lib:watch")]),t._v(" - Watch the library for changes and create a new build on every change")]),t._v(" "),a("li",[a("code",[t._v("lib:build")]),t._v(" - Build the library for production")])]),t._v(" "),a("h3",{attrs:{id:"symlinking-vuesora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symlinking-vuesora","aria-hidden":"true"}},[t._v("#")]),t._v(" Symlinking Vuesora")]),t._v(" "),a("p",[t._v("Creating a symlink in NPM is as simple as hoisting the NPM package as a global package, and linking it in the project\nthat uses it as a dependency. You can achieve that with the following steps:")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("cd /app/vuesora")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("./symlink.sh")])])])]),t._v(" "),a("p",[t._v("This command will prompt you to select an application to symlink Vuesora with, simply select the one you wish to\ndevelop for and wait.")]),t._v(" "),a("p",[t._v("What this will do is start up a watch process on Vuesora, aswell as the app you are developing for. This means\nthat whenever a file is changed in either Vuesora, or the app you are developing for, Webpack will create a\nnew bundle for you.")]),t._v(" "),a("p",[t._v("Keep in mind that this workflow should be reserved for "),a("strong",[t._v("LOCAL DEVELOPMENT ONLY")]),t._v(". If you wish to deploy your\nchanges to production you need to build the app for production and create a new version, you can view how to do\nthat below.")]),t._v(" "),a("h3",{attrs:{id:"publishing-vuesora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-vuesora","aria-hidden":"true"}},[t._v("#")]),t._v(" Publishing Vuesora")]),t._v(" "),a("p",[a("strong",[t._v("Before you can publish Vuesora you need to add your npm and git credentials to your\nRailenvironment Docker Container.")])]),t._v(" "),a("p",[a("code",[t._v("npm adduser")]),t._v(" - follow the cli commands, pretty straight forward "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/adduser",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.npmjs.com/cli/adduser"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v('git config --global user.name "\\your-username\\"')]),t._v(" - Add a git user name")]),t._v(" "),a("p",[a("code",[t._v('git config --global user.email "\\your-email\\"')]),t._v(" - Add a git email address")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("To publish the package, just run the bash script:")]),t._v(" "),a("p",[a("code",[t._v("./publish.sh")])]),t._v(" "),a("p",[t._v("This command will do several things:")]),t._v(" "),a("ul",[a("li",[t._v("Build the library")]),t._v(" "),a("li",[t._v("Commit the new build")]),t._v(" "),a("li",[t._v("Create a new version tag")]),t._v(" "),a("li",[t._v("Commit and push the version tag")]),t._v(" "),a("li",[t._v("Commit and push the repository")]),t._v(" "),a("li",[t._v("Publish the new version")])]),t._v(" "),a("h3",{attrs:{id:"symlinking-bladesora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symlinking-bladesora","aria-hidden":"true"}},[t._v("#")]),t._v(" Symlinking Bladesora")]),t._v(" "),a("p",[t._v("Bladesora is a library of shared blade templates for Musora applications. They are static components\nwithout any javascript logic. Bladesora helps keeps the applications DRY by keeping the same directives\nused across all applications in a central repository. Creating a symbolic link with a PHP package should be done\nwith the Railenvironment CLI")]),t._v(" "),a("p",[a("code",[t._v("r symlink bladesora pianote")])]),t._v(" "),a("p",[a("em",[t._v("Note that at the time of writing this. Bladesora is still an integral part of the application logic, but there are\nplans to deprecate it in the future.")])]),t._v(" "),a("h3",{attrs:{id:"publishing-bladesora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publishing-bladesora","aria-hidden":"true"}},[t._v("#")]),t._v(" Publishing Bladesora")]),t._v(" "),a("p",[t._v("To publish a composer package:")]),t._v(" "),a("ul",[a("li",[t._v("Create and push a tag with the new version number, that's it.")]),t._v(" "),a("li",[t._v("In a few minutes your package will be available via "),a("code",[t._v("r pianote composer update")])])]),t._v(" "),a("h2",{attrs:{id:"using-vuesora"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-vuesora","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Vuesora")]),t._v(" "),a("h3",{attrs:{id:"project-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Project Structure")]),t._v(" "),a("p",[t._v("Since Vuesora is an NPM module, using it consists of 3 steps:")]),t._v(" "),a("ol",[a("li",[t._v("Install the package")]),t._v(" "),a("li",[t._v("Import the modules into local files")]),t._v(" "),a("li",[t._v("Compile modules into your applications code")])]),t._v(" "),a("p",[t._v("Your applications assets directory should look something like:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("└─ resources\n   └─ assets\n      ├─ js\n      |   └─ app.js\n      └─ sass\n          └─ app.scss\n")])])]),a("h3",{attrs:{id:"importing-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Importing Modules")]),t._v(" "),a("p",[t._v("Vuesora itself just exports a Vue component library, exposed as a plugin.")]),t._v(" "),a("h4",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuesora "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuesora'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuesora"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript","aria-hidden":"true"}},[t._v("#")]),t._v(" Javascript")]),t._v(" "),a("p",[t._v("Vuesora's files also have 2 styles of Javascript modules.")]),t._v(" "),a("ol",[a("li",[t._v("Classes and Services that are referenced by a constant:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ContentService "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuesora/src/assets/js/services/content'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VideoTracker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuesora/src/assets/js/classes/video-tracker'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ContentService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContentById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" videoTracker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VideoTracker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Functions that are exported as IIFE's "),a("em",[t._v("(Immediately Invoked Function Expression)")]),t._v(", with the intention to invoke\nimmediately at runtime:")])]),t._v(" "),a("p",[a("em",[t._v("Note that in a world of modules, IIFEs should almost never have to be used, these are slowly being faded out.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuesora/src/assets/js/functions/navigation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sass","aria-hidden":"true"}},[t._v("#")]),t._v(" Sass")]),t._v(" "),a("div",{staticClass:"language-sass extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sass"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@import")]),t._v(' "~vuesora/src/assets/sass/partials/_variables.scss";')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule-line"}},[a("span",{pre:!0,attrs:{class:"token atrule"}},[t._v("@import")]),t._v(" '~vuesora/src/assets/sass/app.scss';")]),t._v("\n")])])]),a("h3",{attrs:{id:"compiling-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compiling-assets","aria-hidden":"true"}},[t._v("#")]),t._v(" Compiling Assets")]),t._v(" "),a("p",[t._v("Applications use the "),a("a",{attrs:{href:"https://laravel-mix.com/docs/4.0/basic-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("Laravel Mix"),a("OutboundLink")],1),t._v(" wrapper for webpack to\ncompile/transpile all assets in a project, your "),a("code",[t._v("webpack.mix.js")]),t._v(" file should look similar to the sample below:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" mix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'laravel-mix'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" autoprefixer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoprefixer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SASS")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources/assets/members/sass/app.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/assets/members/css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JS")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resources/assets/members/js/app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'public/assets/members/js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CONFIG")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extractVueStyles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    postCss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("autoprefixer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpackConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js?$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("babel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        symlinks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    devtool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("inProduction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-map'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("This configuration will take your app.js and app.scss files and do several things to them:")]),t._v(" "),a("ul",[a("li",[t._v("Concatenate and minify all modules included in the entry files, to an output file in the "),a("code",[t._v("/public/assets")]),t._v(" directory")]),t._v(" "),a("li",[t._v("Autoprefix experimental css rules with their vendor prefixes, for cross browser compatibility")]),t._v(" "),a("li",[t._v("Transform ES6/Harmony syntax into browser readable javascript")])]),t._v(" "),a("p",[t._v("The default npm scripts that come bundled with laravel and laravel mix are perfect for our use case.")]),t._v(" "),a("p",[a("code",[t._v("npm run dev")]),t._v("  - This command will run a quick compilation with inline source maps, bundle sizes will be big.")]),t._v(" "),a("p",[a("code",[t._v("npm run watch")]),t._v(" - This command will run a quick compilation with inline source maps everytime a file is saved,\nbundle sizes will be big.'")]),t._v(" "),a("p",[a("code",[t._v("npm run prod")]),t._v(" - This command will run a full compilation without sourcemaps, bundle sizes will be smaller.\n"),a("strong",[t._v("This command should always be run before a deploy!")])]),t._v(" "),a("h3",{attrs:{id:"using-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-assets","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Assets")]),t._v(" "),a("p",[t._v("Create a "),a("code",[t._v("layout.blade.php")]),t._v(" file in your project:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Include bundled css assets --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ mix('assets/members/css/app.css') }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n    @yield('styles')\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    @yield('content')\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Include bundled js assets --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ mix('assets/members/js/manifest.js') }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ mix('assets/members/js/vendor.js') }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{ mix('assets/members/js/app.js') }}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    \n    @yield('scripts')\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Extend the layout in any of your views:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("@extends('members.layout')\n\n@section('styles')\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n@endsection\n\n@section('scripts')\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n@endsection\n\n@section('content')\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ... --\x3e")]),t._v("\n@endsection\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);