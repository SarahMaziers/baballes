const mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', 'dist')
  .setPublicPath('dist');

mix.copy('src/index.html','dist/index.html');

/*.js est une methode de l'objet mix ici*/