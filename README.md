# jq-ui-bootstrap project makeover

This project draws its inspiration from the popular [JQuery UI bootstrap](https://github.com/jquery-ui-bootstrap/jquery-ui-bootstrap) project.
It builds its own infrastructure to serve the Bootstrap 4 theme for JqueryUI. It uses scss preprocessor to re-use bootstrap base variables etc.

## Planned features:

 - [x] Will have a dedicated gh-pages branch and master branches. 
 - [ ] Master branch will hold the "source" in form of the scss files only. while the gh-pages branch will have the example pages.
 - [ ] There will also be a distribution in form of zip file with only css files..

## Tools integration:
 - [ ] Planning to integrate Node based express server to quickly run the pages, Grunt, Jekyll, etc.
 - [ ] The scss themes will be swapable via simple javascript. So the same text content can use multiple CSS files.
 - [ ] There will be generator similar to bootstrap generator to generate new theme as per the variables dynamically.