<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# MercadoLibre Clone [Ecommerce]

This is a project that starts from a migration from NodeJS and Express, to Nest, adding functionalities in order to achieve a robust, scalable, and salable project.

Main features: _Products, Brands, Categories, Subcategories, Comments, Users, Payment System (Sale-Purchase)._

## Starting 🚀

These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes.

See **Deployment** to learn how to deploy the project.


### Pre-requisites 📋

_What things do you need to install the software and how to install them_

```
- Git v2.35.0.
- NodeJS v16.13.2
- NestJS v8.2.0
```

_You can download these technologies from the following links:_

* [Git](https://git-scm.com/downloads)
* [Node (LTS)](https://nodejs.org/es/download/)
* [Nest](https://nestjs.com/)

### Installation 🔧

_A series of step-by-step examples that tell you what you need to run to get a development environment running_

```
Install Git
Install Node
npm i -g @nestjs/cli
```

Now you are ready to open and run the project

```
git clone https://github.com/brahianpdev/nest-js-ecommerce-mongoose
cd nest-js-ecommerce-mongoose
npm install 
npm run start:dev
```

## Deployment 📦

_A brief guide on how to deploy on [Heroku](https://dashboard.heroku.com/apps/polar-everglades-71081/deploy/heroku-git)._


```
Download and install the Heroku CLI.

heroku create
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production
```

In your package.json, add this line:
```
"scripts": {
  "heroku-postbuild": "npm run build"
}
```

Create a file called Procfile at the root of your project, and type the following:
```
web: npm run start
```

Push your github repository to heroku to deploy
```
git add Procfile
git commit -a -m "Configuration to deploy to heroku"
git push heroku master
```

And it’s live. The push-and-deploy process takes a few minutes, and then Heroku gives you the URL where you can see your app.

## Endpoints 🔎

You can see all the documentation of the endpoints [HERE](https://documenter.getpostman.com/view/18310822/UVeKojZU)

__________________________________________

## Built with 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [NestJS](http://www.dropwizard.io/1.0.2/docs/) - Backend framework used
* [MongoDB](https://maven.apache.org/) - Used as my database
* [Mongoose ODM](https://rometools.github.io/rome/) - Used to create the models of my database
* [Postman](https://rometools.github.io/rome/) - Used to test and document my endpoints
* [NPM](https://www.npmjs.com/) - Dependency manager

### Expressions of Gratitude 🎁

_This project is a test in order to expand my knowledge in a new framework through good SOLID practices._

_A special thanks to [Franco](https://github.com/GreccoOliva-Franco/) and [Scorpion](https://github.com/ScorpionConMate), who are always offering their help._

__________________________________________


⚠️ If you run into any problems, please let me know [HERE](https://twitter.com/brahianpdev).
