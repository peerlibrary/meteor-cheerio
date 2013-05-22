Meteor Wrapper for Cheerio NPM Module
=====================================

For documentation, see the [Cheerio Repo](https://github.com/MatthewMueller/cheerio).

This exposes cheerio in a global scope. Your typical syntax in Meteor will look something like:

var $ = cheerio.load(Meteor.http.get(www.google.com).content);

Don't include the require ala the Cheerio docs, Meteor doesn't like it...
