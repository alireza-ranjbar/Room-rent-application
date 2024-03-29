const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue({
            extractStyles : 'public/css/vue-style.css'
    })
    .styles(['resources/css/style.css',
            'node_modules/font-awesome/css/font-awesome.css'],'public/css/style.css')
    .copy('resources/css/IRANSansWeb(FaNum).eot','public/css')
    .copy('resources/css/IRANSansWeb(FaNum).ttf','public/css')
    .copy('resources/css/IRANSansWeb(FaNum).woff','public/css')
    .copy('resources/img','public/img')
    .copy('node_modules/font-awesome/fonts','public/fonts');
    
