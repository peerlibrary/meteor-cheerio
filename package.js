Package.describe({
  summary: "Simple Cheerio NPM wrapper"
});

Npm.depends({"cheerio": "0.12.1"});

Package.on_use(function (api) {

  api.add_files(["/lib/cheeriowrap.js"], "server");
  if (typeof api.export !== 'undefined') {
    api.export(['cheerio'], 'server');
  }
});
