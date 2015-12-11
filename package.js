Package.describe({
    name: 'omega:dirty-chai',
    version: '0.0.1',
    summary: 'Just a wrapper for dirty-chai.',
    git: 'https://github.com/wojtkowiak/meteor-dirty-chai',
    documentation: 'README.md'
});

Npm.depends({
    'dirty-chai': '1.2.2',
    'externalify': '0.1.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use('practicalmeteor:chai@2.1.0_1');
    
    api.addFiles('server.js', 'server');

    api.use('cosmos:browserify@0.9.2', 'client');

    api.addFiles([
      'dirty-chai.browserify.js',
      'dirty-chai.browserify.options.json'
    ], 'client');

    api.export('dirtyChai', 'client');

    api.addFiles('client.js', 'client');
});
