module.exports = {
  name: 'ui-kit-form-builder',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui-kit/form/builder',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
