Package.describe({
  summary: "Simple Cheerio NPM wrapper"
});

Npm.depends({"cheerio": "0.11.0"});

Package.on_use(function (api) {

  api.add_files(["/lib/cheeriowrap.js"], "server");
});
