'use strict';

module.exports = {
    app: {
        title: 'My App',

    },
    port: 8080,
    sessionSecret: 'BucketMovieRocks!',
    
    assets: {
        lib: {
            css: [
                '//fonts.googleapis.com/css?family=Open+Sans',
                '//fonts.googleapis.com/css?family=Roboto:500,400italic,300,500italic,300italic,400',
                'public/lib/font-awesome-4.4.0/css/font-awesome.min.css',
                'public/lib/flag-icon-css/css/flag-icon.min.css',
                'public/lib/angular-loading-bar/build/loading-bar.min.css',
                'public/lib/angular-toastr/dist/angular-toastr.min.css'
            ],
            js: [
                'public/lib/jquery/jquery.min.js',
                'public/scripts/bootstrap.min.js',
                'public/lib/angular/angular.min.js',
                'public/lib/angular-animate/angular-animate.min.js',
                'public/lib/angular-touch/angular-touch.min.js',
                'public/lib/angular-ui-router/release/angular-ui-router.min.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/angular-translate/angular-translate.min.js',
            ]
        },
        css: [
            'public/css/style.css'
        ],
        js: [
            // Modules
            'public/app/app.js',

            // Services


            // Directives

            // Animation

            //Filters

            // Controllers
            

        ]
    }
};
