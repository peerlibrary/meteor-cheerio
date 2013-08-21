Meteor Wrapper for Cheerio NPM Module
=====================================

Deprication Incoming
====================
It's now best to use the npm package available on Atmosphere to use NPM modules in your Meteor project. This package as well as many other NPM wrapper packages on Atmosphere were created when a wrapper was needed to easily install NPM modules. It can be found here, [meteor-npm](https://atmosphere.meteor.com/package/npm).

For documentation, see the [Cheerio Repo](https://github.com/MatthewMueller/cheerio).

This exposes cheerio in a global scope. Your typical syntax in Meteor will look something like:

var $ = cheerio.load(Meteor.http.get(www.google.com).content);

Don't include the require ala the Cheerio docs, Meteor doesn't like it...
