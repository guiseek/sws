module.exports = {
  name: 'ui-kit-card',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ui-kit/card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
