module.exports = {
  name: 'ui-kit-nav-toolbar',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/ui-kit/nav/toolbar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
