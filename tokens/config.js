const StyleDictionary = require('style-dictionary');
const transformer = StyleDictionary.transform['attribute/cti'].transformer;

const propertiesToCTI = {
  'width': {category: 'size', type: 'dimension'},
  'min-width': {category: 'size', type: 'dimension'},
  'max-width': {category: 'size', type: 'dimension'},
  'height': {category: 'size', type: 'dimension'},
  'min-height': {category: 'size', type: 'dimension'},
  'max-height': {category: 'size', type: 'dimension'},
  'border-width': {category: 'size', type: 'border', item: 'width'},
  'border-radius': { category: 'size', type: 'border', item: 'width' },
  'border-color': {category: 'color', type: 'border'},
  'background-color': {category: 'color', type: 'background'},
  'color': {category: 'color', type: 'font'},
  'text-color': { category: 'color', type: 'font' },
  'padding': {category: 'size', type: 'padding'},
  'padding-vertical': {category: 'size', type: 'padding'},
  'padding-horizontal': {category: 'size', type: 'padding'},
  'icon': {category: 'content', type: 'icon'},
  'font-size': {category: 'size', type: 'font'},
  'line-height': { category: 'size', type: 'line-height' },
  'size': {category: 'size', type: 'icon'}
}

/**
 * @type {import('style-dictionary').Transform}
 */
const CTITransform = {
  type: `attribute`,
  transformer: (prop) => {
    // Only do this custom functionality in the 'component' top-level namespace.
    console.log(prop)
    if (prop.path[0] === 'component') {
      // When defining component tokens, the key of the token is the relevant CSS property
      // The key of the token is the last element in the path array
      return propertiesToCTI[prop.path[prop.path.length - 1]];
    } else {
      // Fallback to the original 'attribute/cti' transformer
      return transformer(prop);
    }
  }
}

// We can call .registerTransform here
// or apply the custom transform directly in the configuration below
//
// StyleDictionary.registerTransform({
//   name: 'attribute/cti',
//   type: 'attribute',
//   transformer: CTITransform.transformer
// });

/**
 * @type {import('style-dictionary').Config}
 */
module.exports = {
  // Rather than calling .registerTransform() we can apply the new transform
  // directly in our configuration. Using .registerTransform() with the same
  // transform name, 'attribute/cti', would work as well.
  transform: {
    // Override the attribute/cti transform
    'attribute/cti': CTITransform
  },
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      // We can still use this transformGroup because we are overriding
      // the underlying transform
      transformGroup: 'css',
      buildPath: 'build/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    }
  },
}