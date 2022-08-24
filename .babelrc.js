const nodeVersion = require('./utils/get-node-version');

const babel = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          'node': nodeVersion,
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};

module.exports = babel;