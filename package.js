Package.describe({
  summary: "Simple Cheerio NPM wrapper",
  version: '0.17.0_1',
  git: 'https://github.com/andreioprisan/meteor-cheerio.git'
});

Npm.depends({'cheerio': '0.17.0'});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0');

  api.add_files(['lib/cheeriowrap.js'], 'server');
  if (typeof api.export !== 'undefined') {
    api.export(['cheerio'], 'server');
  }
});
