# jq-ui-bootstrap4 - base themes and customizer

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
 
## How to develop / hack-on 
You will need `node`, `npm`, `grunt` to be available for developing / hacking on the base theme made available here.

To create new and different theme:
* customize the variable values in `src-scss/bootstrap/_variables.scss` and `src-scss/jq-ui-bootstrap/jq-ui-bootstrap-variable-adapter.scss`.
* Use `grunt dist-css` to create the new css in dist folder.

**_To be Elaborated_**

### Use of bootstrap4 as subtree / Why does it show 12000+ commits?
For effective re-use of scss variables from from [bootstrap](https://github.com/twbs/bootstrap) project, I have pulled in the bootstrap project's `v4-dev` branch into this project by using `git subtree`. This allows me to quickly pull in their changes while remaining in my own repo. Its quite more easy to use `git subtree` rather than a `git submodule`.

More details on subtree strategy can be found [here](http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/).

Below commands are requried to be used to use bootstrap as subtree in jqueryui-bootstrap project.
```shell
    # one time - add and pull the bootstrap code the first time.
    git remote add -f bootstrap  https://github.com/twbs/bootstrap.git
    git merge -s ours --no-commit bootstrap/v4-dev
    git read-tree --prefix=src-scss/bootstrap4 -u bootstrap/v4-dev:scss
    git ci -m"[subtree] adding bootstrap4 dev-v4 scss files"
    
    # repeat as necessary - Pull latest bootstrap scss code into Jquery UI Bootstrap codebase.
    git pull -s subtree bootstrap dev-bs4
````

## License
MIT License.

## Contribution
Contribution are more than welcome. Ping me / Post a patch and I will merge.
Before creating pull request, ensure no errors / warnings during the runs of `grunt test-scss` and `grunt dist-css`

__Copyright &copy; Vijay Dharap 2015__ 