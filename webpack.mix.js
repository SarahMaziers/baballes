const mix = require('laravel-mix');

mix.js('src/app.js', 'js')
    .sass('src/main.scss', 'main.css')
  .setPublicPath('dist');

mix.copy('src/index.html','index.html');

/*.js est une methode de l'objet mix ici*/