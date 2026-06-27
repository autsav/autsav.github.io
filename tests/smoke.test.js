const { describe, it } = require('node:test');
const assert = require('node:assert');
const path = require('path');
const fs = require('fs');

describe('gatsby-config', () => {
  const configPath = path.resolve(__dirname, '..', 'gatsby-config.js');

  it('gatsby-config.js exists', () => {
    assert.ok(fs.existsSync(configPath), 'gatsby-config.js should exist');
  });

  it('exports a module via module.exports', () => {
    const content = fs.readFileSync(configPath, 'utf8');
    assert.ok(content.includes('module.exports'), 'should use module.exports');
  });

  it('defines a plugins array', () => {
    const content = fs.readFileSync(configPath, 'utf8');
    assert.ok(content.includes('plugins:'), 'should define plugins');
  });
});
