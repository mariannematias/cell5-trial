# cell5-trial

This project is a trial website from a mock-up image.

## Instructions
The website will load on its own with no other installation needed.

To load, just open file to any browser:

```
index.html
```

### Gulp
This project uses **Gulp** to minify CSS, JS, HTML and images.

To use Gulp, run npm install from the root directory:
```
$ npm install
```

All files used and to be compiled by Gulp are located in the **src/** folder.


**Below are the list of commands you can use to locally develop.**

To minify css, run:
```
$ gulp styles
```


To minify javascript files, run:
```
$ gulp scripts
```


To minify HTML files, run:
```
$ gulp pages
```


To minify image files, run:
```
$ gulp images
```


You can also run below command to do all tasks above (minify css, js, html, images):
```
$ gulp build
```


To watch your files, run below command: 
```
$ gulp watch
```
This automatically compiles all css, js, html, and image files that are updated while on development.


Gulp destination folder: **dist/**.