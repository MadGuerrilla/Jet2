Jet2 Modal technical test
======
Please see below to install and run the build, you will need to install NodeJS and NPM to install the dependencies for this package.
https://nodejs.org/en/

Once you have installed NodeJS successfully, please clone or download the zip for this repository.
Using your shell or terminal open the repository folder and enter the command.
```
npm install
```
Once the dependencies have been downloaded and installed using the command gulp will compile all the SaSS, JS and other relevant files and start a local ExpressJS server with the port 9000.
```
gulp
```
Click http://localhost:9000/ to view the page

The line below will compile all the nunjucks templates into HTML and export all CSS and JS files into a folder called htmlbuild
```
gulp html
```
With this you can deploy the static HTML files locally on your machine without NodeJS or ExpressJS
## Version
* Version 1.0

## Contact
#### Developer/Company
* Homepage: http://madoldguerrilla.herokuapp.com/
