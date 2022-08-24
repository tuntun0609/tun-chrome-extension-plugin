'use strict';

const { execSync } = require('child_process');

function getNodeVersion() {
	const nodeVersion = execSync('node --version');
	return nodeVersion.toString().slice(1) || '12.0.0';
}

getNodeVersion();

module.exports = getNodeVersion;
