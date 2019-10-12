module.exports = {
  name: 'ui-kit-svg-viewer',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui-kit/svg/viewer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
