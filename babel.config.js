module.exports = function(api) {
    api.cache(true);
    return {
      presets: [
        ['babel-preset-expo'],
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: 3,
            targets: 'defaults',
          },
        ],
      ],
      plugins: [
        ['rewrite-require', { aliases: { stream: 'stream-browserify' } }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }]
      ],
    };
  };
